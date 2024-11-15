import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import NormalButtonWithIcon from "../../components/NormalButtonWithIcon";
import { FaPlusCircle } from "react-icons/fa";
import MCATable from "../../components/mca/MCATable";

function MCASessionVacancyMainPage() {
  const [loading, setLoading] = useState(false);
  // setting breadcrumb
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
      title: "Vacancies",
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
            title="Clinic Sessions Vacancies"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-col items-start">
            <div className="h-8 mb-4">
              <NormalButtonWithIcon
                buttonIcon={FaPlusCircle}
                colorType={2}
                link="/medicalCenterAdmin/sessions/vacancies/add"
                title="Create a new vacancy"
              />
            </div>
            <MCATable />
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCASessionVacancyMainPage;
