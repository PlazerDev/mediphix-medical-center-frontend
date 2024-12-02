import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { HiCheckBadge } from "react-icons/hi2";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

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
      link: "/medicalCenterLabStaff",
    },
    {
      title: "Our Doctors",
      link: "/medicalCenterLabStaff/ourDoctors",
    },
    {
      title: data.name,
      link: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Our Doctors"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Lab Staff"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-red-400 rounded-lg">
              <img
                src={""}
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
              <p className="font-bold">Contact Details</p>
              <div className="flex items-center justify-between mt-4">
                <CardTitleAndValue
                  title="Mobile Number"
                  value={data.mobileNumber}
                />
                <CardTitleAndValue title="Email" value={data.email} />
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
