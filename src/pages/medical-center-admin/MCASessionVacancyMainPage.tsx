import { useEffect, useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import NormalButtonWithIcon from "../../components/NormalButtonWithIcon";
import { FaPlusCircle } from "react-icons/fa";
import MCATable from "../../components/mca/MCATable";
import { TimeService } from "../../services/TimeService";
import { StorageService } from "../../services/StorageService";
import { SessionService } from "../../services/mca/SessionService";
import { useAuthContext } from "@asgardeo/auth-react";
import { useLoading } from "../../contexts/LoadingContext";

function MCASessionVacancyMainPage() {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const { getAccessToken } = useAuthContext();
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    startLoading();
    SessionService.getVacancyData(getAccessToken, setData, stopLoading);
  }, []);

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
      {!isLoading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title={TimeService.getGreeting()}
            titleMemberName={StorageService.getUserName() || ""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <div className="flex flex-col items-start">
            <div className="h-8 mb-4">
              <NormalButtonWithIcon
                buttonIcon={FaPlusCircle}
                colorType={2}
                link="/medicalCenterAdmin/sessions/vacancies/createNew"
                title="Create a new vacancy"
              />
            </div>
            <MCATable data={data} />
          </div>
        </div>
      )}
      {isLoading && (
        <div className="flex-grow flex justify-center items-center">
          <Loading />
        </div>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCASessionVacancyMainPage;
