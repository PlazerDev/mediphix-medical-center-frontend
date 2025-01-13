import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCAVacancyNavigator from "../../components/mca/MCAVacancyNavigator";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";

function MCASessionVacancyCreateNewPage() {
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
      title: "Vacancies",
      link: "/medicalCenterAdmin/sessions/vacancies",
    },
    {
      title: "New Vacancy",
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
            title={TimeService.getGreeting()}
            titleMemberName={StorageService.getUserName() || ""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <MCAVacancyNavigator />
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCASessionVacancyCreateNewPage;
