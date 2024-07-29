import Footer from "./../../components/Footer";
import { Divider, Pagination } from "antd";
import doctorImg from "./../../assets/images/patient/appoinment/doctorImage.jpeg";
import swal from "sweetalert";
import MCSEmptyCard from "../../components/medical-center-staff/MCSEmptyCard";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSDateTimeTitle from "../../components/mcs/MCSDateTimeTitle";
import MCSOnGoingSessionDetailsCard from "../../components/mcs/MCSOnGoingSessionDetailsCard";

function MedicalCenterStaffOnGoingSessionsListPage() {
  var noOfSessions: number = 2;

  if (noOfSessions > 0) {
    swal({
      title: "Alert",
      text: "You have" + noOfSessions + " ongoing clinic sessions",
      icon: "info",
      buttons: {
        confirm: {
          text: "OK",
        },
      },
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div from here*/}
        {noOfSessions === 0 && <MCSEmptyCard />}
        {noOfSessions > 0 && (
          <>
            <Divider>
              <MCSDateTimeTitle />
            </Divider>
            <MCSOnGoingSessionDetailsCard
              doctorImg={doctorImg}
              doctorName="Dr. Nishanth Perera"
              doctorEducation="MBBS (COL) specialized in cardiology"
              timeFrame="06.00 AM - 08.00 AM"
              date="2024/June/13"
              hallNumber="HALL - A"
              status="Started"
              sessionId="125ASDSAd"
            />
            <MCSOnGoingSessionDetailsCard
              doctorImg={doctorImg}
              doctorName="Dr. Nishanth Perera"
              doctorEducation="MBBS (COL) specialized in cardiology"
              timeFrame="06.00 AM - 08.00 AM"
              date="2024/June/13"
              hallNumber="HALL - A"
              status="Started"
              sessionId="125ASDSAd"
            />
            <Pagination defaultCurrent={1} total={20} className="text-end" />
          </>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOnGoingSessionsListPage;
