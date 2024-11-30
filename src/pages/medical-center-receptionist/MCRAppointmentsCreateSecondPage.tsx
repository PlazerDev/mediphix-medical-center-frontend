import React, { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import MCRAppointmentCreateSecondBody from "../../components/mcr/MCRAppointmentCreateSecondBody";

function MCRAppointmentsCreateSecondPage() {
  const [loading, setLoading] = useState(false);
  const { appointmentId } = useParams();
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterReceptionist",
    },
    {
      title: "Appointments",
      link: "/medicalCenterReceptionist/appointments",
    },
    {
      title: "Create",
      link: "/medicalCenterReceptionist/appointments/createNew",
    },
    {
      title: "Appointment - " + appointmentId,
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
            title="Register a Patient"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Receptionist"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div>
            <MCRAppointmentCreateSecondBody />
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCRAppointmentsCreateSecondPage;
