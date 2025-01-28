import React, { useState } from "react";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { useLocation, useParams } from "react-router-dom";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Button, Checkbox, Drawer, Input, Tag } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import NormalButtonWithFunction from "../../components/NormalButtonWithFunction";
import { StorageService } from "../../services/StorageService";
import { TimeService } from "../../services/TimeService";
import { useLoading } from "../../contexts/LoadingContext";
import { useAuthContext } from "@asgardeo/auth-react";
import { SessionService } from "../../services/mca/SessionService";

function MCASessionVacancyResponsePage() {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const { getAccessToken } = useAuthContext();
  const [resIdToSent, setResIdToSent] = useState("");
  const [sessionIdToSent, setSessionIdToSend] = useState("");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { vacancyId, responseId } = useParams<{
    vacancyId: string;
    responseId: string;
  }>();
  const [formData, setFormData] = useState({
    hallNumber: "",
    appointmentPayment: "",
    note: "",
  });

  const query = new URLSearchParams(useLocation().search);
  const data = JSON.parse(decodeURIComponent(query.get("data") || "{}"));
  const responseData = data.responses[Number(responseId)];
  const urlData = encodeURIComponent(JSON.stringify(data));

  // Breadcrumb items updated dynamically using vacancyId
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Sessions",
      link: "/medicalCenterAdmin/sessions",
    },
    {
      title: "Vacancies",
      link: "/medicalCenterAdmin/sessions/vacancies",
    },
    {
      title: `Vacancy Details`,
      link: "/medicalCenterAdmin/sessions/vacancies/view?data=" + urlData,
    },
    {
      title: `Response Application`,
      link: "",
    },
  ];

  const appliedOpenSessionIdList: number[] =
    responseData.responseApplications.map((resApplication: any) => {
      return resApplication.appliedOpenSessionId;
    });

  console.log("Applied session id list ", appliedOpenSessionIdList);

  // preparing the data to display..................................................
  const preparedData = data.openSessions.map((sessionData: any) => {
    let finalResult = {};

    const idx: number = appliedOpenSessionIdList.indexOf(sessionData.sessionId);
    if (idx == -1) {
      console.log("not applied");
      // not applied one
      finalResult = {
        sData: sessionData,
        isApplied: false,
      };
      return finalResult;
    } else {
      // applied
      console.log("applied");
      let tempTime = TimeService.formatTime(sessionData.startTime);
      const slotStartTimeList: string[] = [tempTime];
      let i = sessionData.numberOfTimeslots;

      while (i > 1) {
        tempTime = TimeService.addOneHourColonSupport(tempTime);
        slotStartTimeList.push(tempTime);
        i--;
      }
      slotStartTimeList.push(TimeService.formatTime(sessionData.endTime));
      console.log("time list created", slotStartTimeList);

      const slotData = [];
      i = 0;
      while (i < slotStartTimeList.length - 1) {
        slotData.push({
          startTime: slotStartTimeList[i],
          stopTime: slotStartTimeList[i + 1],
          patientCount:
            responseData.responseApplications[idx].numberOfPatientsPerTimeSlot[
              i
            ].maxNumOfPatients,
        });
        i += 1;
      }

      finalResult = {
        sData: sessionData,
        isApplied: true,
        slotData: slotData,
        payment: responseData.responseApplications[idx].expectedPaymentAmount,
        isAccepted: responseData.responseApplications[idx].isAccepted,
      };
      return finalResult;
    }
  });

  console.log("Result: ", preparedData);

  function continueBtnhandler(sessionId: string) {
    console.log(
      "response id",
      responseData.responseId,
      "clicked session id",
      sessionId,
      "vacacncy Id",
      vacancyId
    );
    setResIdToSent(responseData.responseId);
    setSessionIdToSend(sessionId);
    showDrawer();
  }

  // Handler to update state on input change
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value, // Dynamically update the field
    }));
  };

  // Submit handler (example purpose)
  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);

    startLoading();
    const vId = vacancyId == undefined ? "" : vacancyId;
    SessionService.acceptSession(
      vId,
      sessionIdToSent,
      resIdToSent,
      formData,
      getAccessToken,
      stopLoading
    );
    setFormData({
      hallNumber: "",
      appointmentPayment: "",
      note: "",
    });
    setOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <MCSNavBar />
      {/* Body */}
      {!isLoading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title={"Response"}
            titleMemberName={""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-mediphix_card_background p-8 rounded-lg w-full">
              {/* Resposne Application Details */}
              <p className="font-bold mb-2">Response Application Details</p>
              <div className="flex items-center justify-between">
                <CardTitleAndValue
                  title="Submitted Date"
                  value={TimeService.formatDate(
                    responseData.submittedTimestamp
                  )}
                />
                <CardTitleAndValue
                  title="Submitted Time"
                  value={TimeService.formatTime(
                    responseData.submittedTimestamp
                  )}
                />
                <CardTitleAndValue
                  title="Note for the patients"
                  value={responseData.noteToPatient}
                />
              </div>
              {/* Doctor Details */}
              <p className="font-bold mb-2 mt-8">Doctor Details</p>
              <img
                src={responseData.doctorDetails.profileImage}
                className="rounded-full w-32 h-32 object-cover my-4"
                alt="Doctor Profile Image"
              />
              <div className="flex items-center justify-between">
                <CardTitleAndValue
                  title="Doctor Name"
                  value={responseData.doctorDetails.name}
                />
                <CardTitleAndValue
                  title="Email"
                  value={responseData.doctorDetails.email}
                />
                <CardTitleAndValue
                  title="Contact Number"
                  value={responseData.doctorDetails.mobile}
                />
              </div>
            </div>
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg flex flex-col gap-4">
              <p className="font-bold">Session Details</p>
              <div className="flex items-center w-full mt-4 justify-end gap-4">
                <Button danger>Reject All</Button>
              </div>

              {preparedData.map((pd: any) => (
                <div className="border p-4 border-mediphix_text_c rounded-lg">
                  <div className="flex justify-between items-center ">
                    <CardTitleAndValue
                      title="Start Date - End Date"
                      value={
                        !pd.sData.repetition.isRepeat
                          ? "Only in " +
                            TimeService.formatDate(
                              pd.sData.repetition.noRepeatDateTimestamp
                            )
                          : "From " +
                            TimeService.formatDate(
                              pd.sData.rangeStartTimestamp
                            ) +
                            " to " +
                            TimeService.formatDate(pd.sData.rangeEndTimestamp)
                      }
                    />
                    <CardTitleAndValue
                      title="Start Time - End Time"
                      value={
                        TimeService.formatTime(pd.sData.startTime) +
                        " - " +
                        TimeService.formatTime(pd.sData.endTime)
                      }
                    />
                    <CardTitleAndValue
                      title="Repeatition"
                      value={
                        !pd.sData.repetition.isRepeat
                          ? "No Repetition"
                          : pd.sData.repetition.days.join(", ")
                      }
                    />
                    <div className="flex-1">
                      <p className="text-mediphix_text_c text-sm">
                        Expected Payment
                      </p>
                      <p className="text-mediphix_accent">
                        {pd.isApplied ? "Rs. " + pd.payment : "N/A"}
                      </p>
                    </div>
                  </div>
                  {pd.isApplied ? (
                    <>
                      <p className="font-bold mt-4">Time Slot Details</p>
                      {pd.slotData.map((data: any) => (
                        <div>
                          <div className="px-4 py-2 rounded-md mt-2 border bg-[#efefef]">
                            <div className="flex items-center">
                              <p className="w-60 font-medium">
                                Start Time - End Time
                              </p>
                              <p>{data.startTime + " - " + data.stopTime}</p>
                            </div>
                            <div className="flex items-center">
                              <p className="w-60 font-medium">
                                Maxumim Patient Count
                              </p>
                              <p>{data.patientCount}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                  {!pd.isApplied && (
                    <div className="flex items-center justify-end mt-4">
                      <Tag icon={<ExclamationCircleOutlined />} color="warning">
                        Doctor hasn't applied for this session
                      </Tag>
                    </div>
                  )}
                  {pd.isApplied && pd.isAccepted && (
                    <div className="flex items-center justify-end mt-4">
                      <Tag icon={<CheckCircleOutlined />} color="success">
                        Accepted
                      </Tag>
                    </div>
                  )}
                  {pd.isApplied && !pd.isAccepted && (
                    <div className="flex justify-end mt-4">
                      <Button
                        type="primary"
                        onClick={() => {
                          continueBtnhandler(pd.sData.sessionId);
                        }}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Drawer title="Fill the details" onClose={onClose} open={open}>
              <p>Note for the patients from medical center</p>
              <TextArea
                placeholder="Type the note here"
                className="mt-2"
                rows={4}
                value={formData.note}
                onChange={(e) => handleInputChange("note", e.target.value)}
              />
              <div className="mt-4">
                <p>Enter the hall number</p>
                <Input
                  placeholder="Please enter the hall number here"
                  value={formData.hallNumber}
                  onChange={(e) =>
                    handleInputChange("hallNumber", e.target.value)
                  }
                />
              </div>
              <div className="mt-4">
                <p>Enter the appointment payment</p>
                <Input
                  placeholder="Please enter amount here"
                  value={formData.appointmentPayment}
                  onChange={(e) =>
                    handleInputChange("appointmentPayment", e.target.value)
                  }
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button type="primary" onClick={handleSubmit}>
                  Accept
                </Button>
              </div>
            </Drawer>
          </div>
        </div>
      )}
      {isLoading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCASessionVacancyResponsePage;
