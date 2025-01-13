import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import bodyImg from "./../../assets/images/mcs/manageAppoinments.png";
import MCSCustomButton from "../../components/mcs/MCSCustomButton";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";

function MCASessionMainPage() {
  const [loading, setLoading] = useState(false);
  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Sessions",
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
            title={TimeService.getGreeting()}
            titleMemberName={StorageService.getUserName() || ""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
              <p className="text-xl md:text-2xl font-bold">
                Welocome,
                <br />
                Manage your clinic sessions here
              </p>
              <img
                src={bodyImg}
                alt="body"
                className="w-32 my-2 md:my-0 md:w-60 object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
              <MCSCustomButton
                path="/medicalCenterAdmin/sessions/vacancies"
                buttonTitle="Clinic Session Vacancies"
                isPrimary={false}
                buttonIcon={HiDocumentDuplicate}
              />
              <MCSCustomButton
                path="/medicalCenterAdmin/sessions/upcommingSessions"
                buttonTitle="Upcoming Clinic Sessions"
                isPrimary={true}
                buttonIcon={FaCalendarAlt}
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

export default MCASessionMainPage;
