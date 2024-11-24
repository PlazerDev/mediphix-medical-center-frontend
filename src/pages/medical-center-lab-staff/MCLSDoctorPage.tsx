import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCLSSearchAndSelect from "../../components/mcls/MCLSSearchAndSelect";
import MCLSDoctorList from "../../components/mcls/MCLSDoctorList";

function MCLSDoctorPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterLabStaff",
    },
    {
      title: "Our Doctors",
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
            title="Our Doctors"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Lab Staff"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div>
            <MCLSSearchAndSelect />
            <MCLSDoctorList />
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCLSDoctorPage;
