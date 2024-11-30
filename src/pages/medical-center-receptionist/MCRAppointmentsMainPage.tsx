import { useState } from "react";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import MCSCustomButton from "../../components/mcs/MCSCustomButton";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import bodyImg from "./../../assets/images/mcs/manageAppoinments.png";
import { FaCalendarPlus, FaHandHoldingDollar } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";

function MCRAppointmentsMainPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterReceptionist",
    },
    {
      title: "Appointments",
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
            title="Appointments"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Receptionist"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
              <p className="text-xl md:text-2xl font-bold">
                Welocome,
                <br />
                Manage appointments here
              </p>
              <img
                src={bodyImg}
                alt="body"
                className="w-32 my-2 md:my-0 md:w-60 object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
              <MCSCustomButton
                path="/medicalCenterReceptionist/appointments/createNew"
                buttonTitle="Create Appointments"
                isPrimary={false}
                buttonIcon={FaCalendarPlus}
              />
              <MCSCustomButton
                path="/medicalCenterReceptionist/appointments/payment"
                buttonTitle="Appointment Payments"
                isPrimary={true}
                buttonIcon={FaHandHoldingDollar}
              />
              <MCSCustomButton
                path=""
                buttonTitle="Update Appointments"
                isPrimary={false}
                buttonIcon={GrUpdate}
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

export default MCRAppointmentsMainPage;
