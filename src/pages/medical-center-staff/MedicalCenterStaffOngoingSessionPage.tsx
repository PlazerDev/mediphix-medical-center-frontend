import { Link, useParams } from "react-router-dom";
import Footer from "./../../components/Footer";
import { Button, Divider } from "antd";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSDateTimeTitle from "../../components/mcs/MCSDateTimeTitle";
import MCSTimeSlotCard from "../../components/mcs/MCSTimeSlotCard";
import MCSPatientDetailsCard from "../../components/mcs/MCSPatientDetailsCard";
import MCSNextPatientDetailsCard from "../../components/mcs/MCSNextPatientDetailsCard";
import MCSQueueDetailsCard from "../../components/mcs/MCSQueueDetailsCard";

function MedicalCenterStaffOngoingSessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting
          medicalCenterName="Nawaloka Hospital"
          memberName="Vishwa"
        />
        {/* Main Body div */}
        <Divider>
          <MCSDateTimeTitle />
        </Divider>
        <MCSTimeSlotCard
          timeRange="08.00 AM - 09.00 AM"
          maxPatientSessions={8}
          status="In Progress"
        />
        <MCSPatientDetailsCard />
        <MCSNextPatientDetailsCard />
        <MCSQueueDetailsCard />
        <div className="flex justify-end mt-4">
          <Link to={"/medicalCenterStaff/onGoingSessions/" + sessionId + "/#"}>
            <Button type="primary">End Current Time Slot & Start Next</Button>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOngoingSessionPage;
