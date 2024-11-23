import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import VacancyService from "../../services/VacancyService";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";

function MCASessionVacancyDetailedPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { vacancyId } = useParams<{ vacancyId: string }>();

  const data = VacancyService.getSampleData();

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

  function responseBtnHandler(id: string) {
    // Navigate to a detailed page with the vacancyId and responseId
    navigate(`/medicalCenterAdmin/sessions/vacancies/${vacancyId}/${id}`);
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
            {/* Additional Details */}
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-bold">Additional Details</p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <CardTitleAndValue
                    title="Opened Date"
                    value={data.additionalData.openedDate}
                  />
                  <CardTitleAndValue
                    title="Opened Time"
                    value={data.additionalData.openedTime}
                  />
                  <CardTitleAndValue
                    title="Appointment Categories"
                    value={data.additionalData.appointmentCategories.join(", ")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitleAndValue
                    title="Contact Numbers"
                    value={data.additionalData.contactNumber}
                  />
                  <div className="flex-1">
                    <p className="text-mediphix_text_c text-sm">Status</p>
                    <p
                      className={
                        data.additionalData.status === 1
                          ? "text-green-500"
                          : "bg-red-500"
                      }
                    >
                      {data.additionalData.status === 1 ? "OPEN" : "CLOSED"}
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
                    value={data.additionalData.noteForDoctor}
                  />
                </div>
              </div>
            </div>
            {/* Date Time Details */}
            <div className="bg-mediphix_card_background w-full p-8 rounded-lg">
              <p className="font-bold">Date & Time Details</p>
              <div className="flex flex-col gap-4 mt-4">
                {data.dateAndTimeData.map((item, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between border-2 p-4 rounded-lg"
                  >
                    <CardTitleAndValue
                      title="Start Time & End time"
                      value={`From ${item.startTime} to ${item.endTime}`}
                    />
                    <CardTitleAndValue
                      title="Start Date & End Date"
                      value={`From ${item.startDate} to ${item.endDate}`}
                    />
                    <CardTitleAndValue
                      title="Repetition"
                      value={
                        item.repetition.length > 0
                          ? `Weekly on ${item.repetition.join(", ")}`
                          : `No Repetition, only ${item.selectedDate} once`
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
                  {data.responseData.length}
                </span>
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                {data.responseData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => responseBtnHandler(item.id)}
                    className="border-2 border-mediphix_text_d px-4 py-2 rounded-lg w-[440px] hover:cursor-pointer hover:bg-mediphix_text_d"
                  >
                    <p className="text-left">{item.doctorName}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p>{item.dateSent}</p>
                        <p>{item.timeSent}</p>
                      </div>
                      <p
                        className={
                          item.status === 0
                            ? "text-mediphix_text_c"
                            : item.status === 1
                            ? "text-mediphix_accent"
                            : "text-green-500"
                        }
                      >
                        {item.status === 0
                          ? "Rejected"
                          : item.status === 1
                          ? "Pending"
                          : "Approved"}
                      </p>
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
