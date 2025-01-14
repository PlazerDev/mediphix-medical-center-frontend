import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./../../components/Footer";
import { Button, Divider, Modal } from "antd";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSDateTimeTitle from "../../components/mcs/MCSDateTimeTitle";
import MCSTimeSlotCard from "../../components/mcs/MCSTimeSlotCard";
import MCSQueueDetailsCard from "../../components/mcs/MCSQueueDetailsCard";
import NormalButton from "../../components/NormalButton";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MCRPaymentScanQr from "../../components/mcr/MCRPaymentScanQr";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";
import { SessionService } from "../../services/mca/SessionService";
import { useLoading } from "../../contexts/LoadingContext";
import { useAuthContext } from "@asgardeo/auth-react";
import Loading from "../../components/Loading";

function MedicalCenterStaffOngoingSessionPage() {
  const [appointmentNumber, setAppointmentNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { getAccessToken } = useAuthContext();
  const { startLoading, stopLoading, isLoading } = useLoading();
  const [data, setData] = useState<any | null>(null);
  const { sessionId } = useParams<{ sessionId: string }>();

  const sId: string = sessionId || "";

  useEffect(() => {
    startLoading();
    SessionService.getOngoingSessionDetails(
      sId,
      getAccessToken,
      setData,
      stopLoading,
      navigate
    );
  }, []);

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
        {isLoading && (
          <div className="flex items-center justify-center mt-32">
            <Loading />
          </div>
        )}
        {!isLoading && (
          <div>
            {data != null && <MCSTimeSlotCard data={data} />}
            {data != null && (
              <MCSQueueDetailsCard
                handler={showModal}
                data={data.timeSlots[0]}
              />
            )}
            <div className="flex justify-end mt-4">
              <NormalButton
                colorType={2}
                link={"/medicalCenterStaff/onGoingSessions/" + sessionId + "/#"}
                title="End Current Time Slot & Start Next"
              />
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOngoingSessionPage;
