import { Link, useParams } from "react-router-dom";
import Footer from "./../../components/Footer";
import { Button, Divider, Modal } from "antd";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSDateTimeTitle from "../../components/mcs/MCSDateTimeTitle";
import MCSTimeSlotCard from "../../components/mcs/MCSTimeSlotCard";
import MCSQueueDetailsCard from "../../components/mcs/MCSQueueDetailsCard";
import NormalButton from "../../components/NormalButton";
import { useState } from "react";
import Swal from "sweetalert2";
import MCRPaymentScanQr from "../../components/mcr/MCRPaymentScanQr";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";

function MedicalCenterStaffOngoingSessionPage() {
  const [appointmentNumber, setAppointmentNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleScanResult(appointmentNumber: string) {
    setAppointmentNumber(appointmentNumber);
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Patient Varified",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      title: "A Clinic Session",
      link: "",
    },
  ];
  const { sessionId } = useParams<{ sessionId: string }>();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting
          title="Clinic Session"
          titleMemberName=""
          breadcrumbItems={breadcrumbItems}
          role="Medical Center Staff Member"
        />
        {/* Main Body div */}
        <Modal
          title="Point the QR Code to the camera"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <MCRPaymentScanQr handleScanResult={handleScanResult} />
        </Modal>

        <Divider>
          <MCSDateTimeTitle />
        </Divider>
        <MCSTimeSlotCard
          timeRange="08.00 AM - 09.00 AM"
          maxPatientSessions={8}
          status="In Progress"
        />
        <MCSQueueDetailsCard handler={showModal} />
        <div className="flex justify-end mt-4">
          <NormalButton
            colorType={2}
            link={"/medicalCenterStaff/onGoingSessions/" + sessionId + "/#"}
            title="End Current Time Slot & Start Next"
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOngoingSessionPage;
