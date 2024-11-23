import React, { useState } from "react";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { useParams } from "react-router-dom";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import ResponseService from "../../services/ResponseService";
import { Button, Checkbox, Input, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import NormalButtonWithFunction from "../../components/NormalButtonWithFunction";

function MCASessionVacancyResponsePage() {
  const [loading, setLoading] = useState(false);
  const { vacancyId, responseId } = useParams<{
    vacancyId: string;
    responseId: string;
  }>();
  const [markedData, setMarkedData] = useState<string[]>([]);
  const [note, setNote] = useState<string>("");

  const data = ResponseService.getSampleResponseData();

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
      link: "/medicalCenterAdmin/sessions/vacancies/" + vacancyId,
    },
    {
      title: `Response Application`,
      link: "",
    },
  ];

  // chcelbox handler
  function checkBoxHandler(id: string) {
    setMarkedData((prevMarkedData) => {
      if (!prevMarkedData.includes(id)) {
        return [...prevMarkedData, id];
      }

      return prevMarkedData.filter((item) => item !== id);
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Clinic Sessions Vacancies"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-mediphix_card_background p-8 rounded-lg w-full">
              {/* Resposne Application Details */}
              <p className="font-bold mb-2">Response Application Details</p>
              <div className="flex items-center justify-between">
                <CardTitleAndValue
                  title="Submitted Date"
                  value={data.requestApplicationData.submittedDate}
                />
                <CardTitleAndValue
                  title="Submitted Time"
                  value={data.requestApplicationData.submittedTime}
                />
              </div>
              {/* Doctor Details */}
              <p className="font-bold mb-2 mt-8">Doctor Details</p>
              <div className="flex items-center justify-between">
                <CardTitleAndValue
                  title="Doctor Name"
                  value={data.doctorData.name}
                />
                <CardTitleAndValue
                  title="Contact Number"
                  value={data.doctorData.contactNumber}
                />
              </div>
              <div className="mt-2">
                <CardTitleAndValue
                  title="Note for the patients"
                  value={data.doctorData.noteForPatients}
                />
              </div>
              {/* Date and Time Details */}
              <p className="font-bold mt-8">Date & Time Details</p>
              <div className="mt-2 flex flex-col gap-2">
                {data.dateAndTimeData.map((item) => {
                  return (
                    <div className="border-2 p-4 rounded-md">
                      <div className="flex items-center justify-between">
                        <CardTitleAndValue
                          title="Start & End Date"
                          value={
                            "From " + item.startDate + " to " + item.endDate
                          }
                        />
                        <CardTitleAndValue
                          title="Start & End Time"
                          value={
                            "From " + item.startTime + " to " + item.endTime
                          }
                        />
                        <CardTitleAndValue
                          title="Repetition"
                          value={
                            item.repetition.length > 0
                              ? "Repeat weekly on " + item.repetition.join(", ")
                              : "No repetition, Only " +
                                item.selectedDate +
                                " once"
                          }
                        />
                      </div>
                      {item.hasApplied && (
                        <div className="mt-2">
                          <div className="flex items-center justify-start">
                            <div className="text-mediphix_text_c text-sm w-[200px]">
                              Time Frame
                            </div>
                            <div className="text-mediphix_text_c text-sm w-[200px]">
                              Number of Patients
                            </div>
                          </div>
                          <div className="flex">
                            <div>
                              {item.slotData.map((slotItem) => {
                                return (
                                  <div className="flex items-center justify-start">
                                    <p className="w-[200px]">
                                      {slotItem.startTime +
                                        " - " +
                                        slotItem.endTime}
                                    </p>
                                    <p className="w-[200px]">
                                      {slotItem.noOfPatients}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="w-full flex items-center justify-end">
                              <Checkbox
                                onChange={() => {
                                  checkBoxHandler(item.id);
                                }}
                              >
                                Mark as Accepted
                              </Checkbox>
                            </div>
                          </div>
                        </div>
                      )}
                      {!item.hasApplied && (
                        <div className="flex items-center justify-end mt-2">
                          <Tag
                            icon={<ExclamationCircleOutlined />}
                            color="warning"
                          >
                            Doctor hasn't accepted this time frame
                          </Tag>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p>Note for the patients from medical center</p>
              <TextArea
                placeholder="Type the note here"
                className="mt-2"
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-medium">
                {"You have marked " +
                  markedData.length +
                  " time slots as accepted"}
              </p>
            </div>
            <div className="flex items-center w-full justify-end gap-4">
              <NormalButtonWithFunction
                colorType={1}
                title="Reject The Application"
                handler={() => {}}
              />
              <NormalButtonWithFunction
                colorType={2}
                title="Appove Marked Time Slots"
                handler={() => {}}
              />
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCASessionVacancyResponsePage;
