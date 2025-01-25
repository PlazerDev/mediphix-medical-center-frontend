import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";

function MCASessionVacancyDetailedPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const query = new URLSearchParams(useLocation().search);
  const data = JSON.parse(decodeURIComponent(query.get("data") || "{}"));

  console.log("Received Data:", data);

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
      link: "",
    },
  ];

  function responseBtnHandler(id: number) {
    // Navigate to a detailed page with the vacancyId and responseId
    const urlData = encodeURIComponent(JSON.stringify(data));
    navigate(
      `/medicalCenterAdmin/sessions/vacancies/view/${data._id}/${id}?data=${urlData}`
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title={"Vacancy"}
            titleMemberName={""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <div className="flex flex-col items-start gap-4">
            {/* Additional Details */}
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-bold">Additional Details</p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <CardTitleAndValue
                    title="Opened Date"
                    value={TimeService.formatDate(data.vacancyOpenedTimestamp)}
                  />
                  <CardTitleAndValue
                    title="Opened Time"
                    value={TimeService.formatTime(data.vacancyOpenedTimestamp)}
                  />
                  <CardTitleAndValue
                    title="Appointment Categories"
                    value={data.aptCategories.join(", ")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitleAndValue
                    title="Contact Numbers"
                    value={data.mobile}
                  />
                  <div className="flex-1">
                    <p className="text-mediphix_text_c text-sm">Status</p>
                    <p
                      className={
                        data.vacancyStatus === "OPEN"
                          ? "text-green-500"
                          : "bg-red-500"
                      }
                    >
                      {data.vacancyStatus === "OPEN" ? "OPEN" : "CLOSED"}
                    </p>
                  </div>
                  <div className="flex-1">
                    <Button
                      type="primary"
                      icon={<WarningOutlined />}
                      size="large"
                      danger
                    >
                      Close the Vacancy
                    </Button>
                  </div>
                </div>
                <div>
                  <CardTitleAndValue
                    title="Note for doctors about the vacancy"
                    value={data.vacancyNoteToDoctors}
                  />
                </div>
              </div>
            </div>
            {/* Date Time Details */}
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-bold">Date & Time Details</p>
              <div className="flex flex-col gap-4 mt-4">
                {data.openSessions.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-2 p-4 rounded-lg"
                  >
                    <CardTitleAndValue
                      title="Start Time & End time"
                      value={`From ${TimeService.formatTime(
                        item.startTime
                      )} to ${TimeService.formatTime(item.endTime)}`}
                    />
                    <CardTitleAndValue
                      title="Start Date & End Date"
                      value={
                        item.repetition.isRepeat
                          ? `From ${TimeService.formatDate(
                              item.rangeStartTimestamp
                            )} to ${TimeService.formatDate(
                              item.rangeEndTimestamp
                            )}`
                          : `Only in ${TimeService.formatDate(
                              item.repetition.noRepeatDateTimestamp
                            )}`
                      }
                    />
                    <CardTitleAndValue
                      title="Repetition"
                      value={
                        item.repetition.isRepeat
                          ? `Weekly on ${item.repetition.days.join(", ")}`
                          : `No Repetition, only ${TimeService.formatDate(
                              item.repetition.noRepeatDateTimestamp
                            )} once`
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Responses Details */}
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-bold mb-4">
                Responses{" "}
                <span className="bg-mediphix_accent px-2 py-1 rounded-lg text-white">
                  {data.responses.length}
                </span>
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                {data.responses.map((item: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => responseBtnHandler(index)}
                    className="border-2 border-mediphix_text_d p-4 rounded-lg w-[440px] hover:cursor-pointer hover:bg-mediphix_text_d"
                  >
                    <div className="flex items-center gap-8">
                      <div>
                        <img
                          src={item.doctorDetails.profileImage}
                          alt="Doctor Profile Image"
                          className="w-16 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-left">
                          {"Dr. " + item.doctorDetails.name}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p>
                              {TimeService.formatDate(item.submittedTimestamp)}
                            </p>

                            <p>
                              {TimeService.formatTime(item.submittedTimestamp)}
                            </p>
                          </div>
                          <p
                            className={
                              item.isCompletelyRejected
                                ? "text-red-500"
                                : "text-mediphix_text_c ml-4"
                            }
                          >
                            {item.isCompletelyRejected
                              ? "Application Rejected"
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
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

export default MCASessionVacancyDetailedPage;
