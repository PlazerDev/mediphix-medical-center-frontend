import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCRCreateAppointmentSearching from "../../components/mcr/MCRCreateAppointmentSearching";
import {
  AppointmentDataRecord,
  AppointmentService,
} from "../../services/mcr/AppointmentService";
import MCRCreateAppointmentNoData from "../../components/mcr/MCRCreateAppointmentNoData";
import MCRCreateAppointmentList from "../../components/mcr/MCRCreateAppointmentList";

function MCRAppointmentsCreatePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AppointmentDataRecord[]>([]);

  function onSearch(values: any) {
    // just a sample logic to show the interactivity :: remove it later
    if (data.length > 0) {
      setData([]);
    } else {
      setData(AppointmentService.getSampleAppointmentDataList());
    }
  }

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
      title: "Create",
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
            title="Register a Patient"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Receptionist"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div>
            <MCRCreateAppointmentSearching onFinish={onSearch} />
            {data.length === 0 && <MCRCreateAppointmentNoData />}
            {data.length > 0 && <MCRCreateAppointmentList data={data} />}
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCRAppointmentsCreatePage;
