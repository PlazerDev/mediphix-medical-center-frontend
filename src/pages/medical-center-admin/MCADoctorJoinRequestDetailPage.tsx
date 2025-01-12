import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { HiCheckBadge } from "react-icons/hi2";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import docImg from "./../../assets/images/mcs/doctorImage.jpeg";
import { DoctorService } from "../../services/mca/DoctorService";
import { Col, Row } from "antd";
import MCSCalender from "../../components/mcs/MCSCalender";
import MCSSelectedDate from "../../components/mcs/MCSSelectedDate";
import dayjs from "dayjs";
import medicalCenterImage from "./../../assets/images/mcs/medical_center_logo.png";
import NormalButtonWithFunction from "../../components/NormalButtonWithFunction";

function MCADoctorJoinRequestDetailPage() {
  const { doctorId } = useParams<{
    doctorId: string;
  }>();
  // setting loading
  const [loading, setLoading] = useState(false);

  const data = LabReportsService.getSampleDoctorDetails();

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Doctors",
      link: "/medicalCenterAdmin/doctors",
    },
    {
      title: "Join Requests",
      link: "/medicalCenterAdmin/doctors/joinRequests",
    },
    {
      title: "Doctor Details",
      link: "",
    },
  ];

  const medicalCenterList = DoctorService.getSampleMedicalCenterList();
  const appointmentList = DoctorService.getSampleAppointmentDataList();
  const currentDate = dayjs();

  const [dateComponents, setDateComponents] = useState({
    day: currentDate.format("DD"),
    weekday: currentDate.format("dddd"),
    month: currentDate.format("MMMM"),
    year: currentDate.format("YYYY"),
  });

  // Function to update state with date components
  const updateSelectedDate = (
    day: string,
    weekday: string,
    month: string,
    year: string
  ) => {
    setDateComponents({ day, weekday, month, year });
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Doctor Details"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Lab Staff"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-red-400 rounded-lg">
              <img
                src={docImg}
                alt="Doctor"
                className="absolute top-8 left-8 w-32 h-32 object-cover rounded-full border-4 border-white"
              />

              <div className="h-24 bg-mediphix_accent rounded-t-md"></div>

              <div className="bg-mediphix_card_background rounded-b-md flex px-8 pb-8 gap-8">
                <div className="flex flex-col justify-center pt-20 gap-1">
                  <div className="flex gap-2 items-center">
                    <p className="font-bold">{data.name}</p>
                    <HiCheckBadge className="text-mediphix_accent text-xl" />
                  </div>
                  <p className="text-nowrap">{data.educationQualification}</p>
                </div>
                <div>
                  <div className="flex items-center mt-4">
                    <CardTitleAndValue
                      title="Specialization"
                      value={data.specialization}
                    />
                    <CardTitleAndValue
                      title="Supported Appointment Categories"
                      value={data.supportedAppointmentCategories.join(", ")}
                    />
                  </div>
                  <div className="mt-2">
                    <CardTitleAndValue
                      title="Description"
                      value={data.description}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-mediphix_card_background p-8 rounded-lg">
              Requested to join
              <div className="flex flex-row gap-2 mt-2">
                <div>
                  <NormalButtonWithFunction
                    colorType={1}
                    title="Reject"
                    handler={() => {}}
                  />
                </div>
                <div>
                  <NormalButtonWithFunction
                    colorType={2}
                    title="Accept"
                    handler={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="bg-mediphix_card_background p-8 rounded-lg">
              <p className="font-bold">Contact Details</p>
              <div className="flex items-center justify-between mt-4">
                <CardTitleAndValue
                  title="Mobile Number"
                  value={data.mobileNumber}
                />
                <CardTitleAndValue title="Email" value={data.email} />
              </div>
            </div>
            <div className="bg-mediphix_card_background p-8 rounded-lg">
              <p className="font-bold">Avilable At</p>
              <Row gutter={16}>
                {medicalCenterList.map((item) => (
                  <Col span={6}>
                    <div>{"🔸" + item}</div>
                  </Col>
                ))}
              </Row>
            </div>
            {/* From here the appointments  */}
            <div className="bg-mediphix_card_background p-8 rounded-lg">
              <MCSCalender updateSelectedDate={updateSelectedDate} />
              <MCSSelectedDate
                day={dateComponents.day}
                weekday={dateComponents.weekday}
                monthAndYear={dateComponents.month + " " + dateComponents.year}
              />
              <div className="flex flex-col gap-0">
                {appointmentList.map((item) => (
                  <div className="border border-mediphix_text_d my-4 rounded-lg p-8">
                    <p className="font-bold">Clinic Session Details</p>
                    <div className="my-2 flex md:flex-row flex-col">
                      <div className="flex flex-1">
                        <div className="flex-1">
                          <p className="text-mediphix_text_c text-sm">
                            Time Frame
                          </p>
                          <p>{item.startTime + " - " + item.endTime}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-mediphix_text_c text-sm">Date</p>
                          <p>{item.date}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-mediphix_text_c text-sm">
                            Appointment Categories
                          </p>
                          <p>{item.appointmentCategories.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-bold mb-2">Medical Center Details</p>
                    <div className="flex gap-8 items-center">
                      <div>
                        <img
                          className="object-cover w-24 h-full rounded-lg"
                          src={medicalCenterImage}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex-1">
                          <p className="text-mediphix_text_c text-sm">Name</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default MCADoctorJoinRequestDetailPage;
