import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import doctorImg from "./../../assets/images/mcs/doctor_nurse.png";
import { Button } from "antd";

function MedicalCenterStaffStartNextSessionPage() {
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterStaff",
    },
    {
      title: "Ongoing Sessions",
      link: "/medicalCenterStaff/onGoingSessions",
    },
    {
      title: "A Session",
      link: "/medicalCenterStaff/onGoingSessions/51351465465d",
    },
    {
      title: "Start Next",
      link: "",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting
          title="Start Next Patient Session"
          titleMemberName=""
          breadcrumbItems={breadcrumbItems}
          role="Medical Center Staff Member"
        />
        {/* Main Body div */}
        <div className="bg-mediphix_card_background p-8 rounded-lg flex flex-col items-center">
          <img src={doctorImg} className="w-40 object-contain md:w-60" />
          <p className="font-bold text-xl text-center">Confirm Start Session</p>
          <p className="text-center text-mediphix_text_c">
            Are you sure you want to start the session for this patient? This
            action cannot be reversed.
          </p>
          <div className="flex flex-col w-full md:flex-row mt-4 md:gap-0 gap-2">
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Queue Number</p>
              <p>04</p>
            </div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">
                Appointment Reference Number
              </p>
              <p>REF_A0045</p>
            </div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Payment Status </p>
              <p>Done</p>
            </div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Name</p>
              <p>Vishwa Sandaruwan</p>
            </div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Age</p>
              <p>20 - 30</p>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-2 md:gap-4">
            <Button>Back</Button>
            <Button type="primary">Confirm & Start the Session</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffStartNextSessionPage;
