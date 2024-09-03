import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { Input } from "antd";
import type { GetProps } from "antd";
import { FaQrcode } from "react-icons/fa6";
import MCRNormalButtonWithIcon from "../../components/mcr/MCRNormalButtonWithIcon";
import MCRPaymentsDefault from "../../components/mcr/MCRPaymentsDefault";
import MCRUnpaid from "../../components/mcr/MCRUnpaid";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

function MCRAppointmentsPaymentsPage() {
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
            <MCRNormalButtonWithIcon
              link=""
              title="Scan QR"
              buttonIcon={FaQrcode}
              colorType={1}
            />
          </div>
          {/* Default view when the search bar is clear*/}
          {/* <MCRPaymentsDefault /> */}
          {/* When there is a search result and its unpaid */}
          <MCRUnpaid />
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCRAppointmentsPaymentsPage;
