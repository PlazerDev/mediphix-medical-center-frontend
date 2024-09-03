import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { Input, Modal } from "antd";
import type { GetProps } from "antd";
import { FaQrcode } from "react-icons/fa6";
import MCRPaymentBody from "../../components/mcr/MCRPaymentBody";
import NormalButtonWithIcon from "../../components/NormalButtonWithIcon";
import MCRPaymentScanQr from "../../components/mcr/MCRPaymentScanQr";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

function MCRAppointmentsPaymentsPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // for scan QR
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // setting breadcrumb
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
      title: "Payments",
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
            title="Appointment Payments"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Receptionist"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-row justify-between items-center gap-4">
            <Search
              placeholder="Enter the appointment reference number"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
            <div onClick={showModal} className="h-10">
              <NormalButtonWithIcon
                link=""
                title="Scan QR"
                buttonIcon={FaQrcode}
                colorType={1}
              />
            </div>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <MCRPaymentScanQr />
            </Modal>
          </div>
          {/* Default view when the search bar is clear*/}
          {/* <MCRPaymentsDefault /> */}
          {/* When there is a search result and its unpaid */}
          <MCRPaymentBody />
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCRAppointmentsPaymentsPage;
