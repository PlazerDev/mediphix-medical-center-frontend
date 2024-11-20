import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";

function MCAUpcommingSessionPage() {
  const [loading, setLoading] = useState(false);
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Sessions",
      link: "/medicalCenterAdmin/sessions",
    },
    {
      title: "Upcomming Sessions",
      link: "/medicalCenterAdmin/sessions/upcommingSessions",
    },
    {
      title: "Session Details",
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
            title="Upcoming Clinic Session - 2024/06/15 - From 08.00 PM To 11.00 PM"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCAUpcommingSessionPage;
