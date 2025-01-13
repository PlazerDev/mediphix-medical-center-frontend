import Footer from "./../../components/Footer";
import bodyImg from "./../../assets/images/mcs/manageAppoinments.png";
import { FaCalendarDays } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSCustomButton from "../../components/mcs/MCSCustomButton";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";

interface MCSMemeberData {
  first_name: string;
  medical_center_id: string;
  medical_center_name: string;
}

function MedicalCenterStaffHomePage() {
  const [mcsMemeberData, setMCSMemberData] = useState<MCSMemeberData>({
    first_name: "Vishwa",
    medical_center_id: "1231",
    medical_center_name: "Nawaloka",
  });
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
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
            role="Medical Center Staff Member"
          />
          {/* Main Body div */}
          <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
              <p className="text-xl md:text-2xl font-bold">
                Hi{" "}
                {mcsMemeberData ? mcsMemeberData.first_name : "mcs member name"}
                !
                <br /> Manage your assigned clinic sessions here
              </p>
              <img
                src={bodyImg}
                alt="body"
                className="w-32 my-2 md:my-0 md:w-60 object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
              <MCSCustomButton
                path="/medicalCenterStaff/upcomingSessions"
                buttonTitle="Upcoming Clinic Sessions"
                isPrimary={false}
                buttonIcon={FaCalendarDays}
              />
              <MCSCustomButton
                path="/medicalCenterStaff/onGoingSessions"
                buttonTitle="Ongoing Clinic Sessions"
                isPrimary={true}
                buttonIcon={FaHandHoldingMedical}
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

export default MedicalCenterStaffHomePage;
