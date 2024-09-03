import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSCustomButton from "../../components/mcs/MCSCustomButton";
import { FaCalendarDays, FaUserDoctor, FaUsers } from "react-icons/fa6";
import bodyImg from "./../../assets/images/mcs/manageAppoinments.png";
import { HiUserAdd } from "react-icons/hi";
import { FaClinicMedical } from "react-icons/fa";

function MCRHomePage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterReceptionist",
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
            title="Good Evening"
            titleMemberName="Vishwa"
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
                Here is your control center
              </p>
              <img
                src={bodyImg}
                alt="body"
                className="w-32 my-2 md:my-0 md:w-60 object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
              <MCSCustomButton
                path=""
                buttonTitle="Register Patient"
                isPrimary={false}
                buttonIcon={HiUserAdd}
              />
              <MCSCustomButton
                path=""
                buttonTitle="Appointments"
                isPrimary={true}
                buttonIcon={FaCalendarDays}
              />
              <MCSCustomButton
                path=""
                buttonTitle="Medical Center"
                isPrimary={false}
                buttonIcon={FaClinicMedical}
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

export default MCRHomePage;
