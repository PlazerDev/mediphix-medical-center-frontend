import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { SessionService } from "../../services/mca/SessionService";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Link } from "react-router-dom";

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

  const data = SessionService.getSampleSessionData();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Session Details"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="bg-mediphix_card_background p-8 rounded-lg">
            <p className="font-bold  mb-1">Details of the Clinic Session</p>
            <div className="flex justify-center">
              <CardTitleAndValue
                title="Time Frame"
                value={data.startTime + " - " + data.endTime}
              />
              <CardTitleAndValue title="Date" value={data.date} />
              <CardTitleAndValue
                title="Appointment Categories"
                value={data.appointmentCategories.join(", ")}
              />
            </div>
            <p className="font-bold mb-1 mt-4">Doctor Details</p>
            <div>
              <div className="flex-1">
                <p className="text-mediphix_text_c text-sm">Name</p>
                <Link to={"/custome/" + data.doctorDetails.id}>
                  <p>{data.doctorDetails.name}</p>
                </Link>
              </div>
            </div>
            <p className="font-bold mb-1 mt-4">Additional Details</p>
            <div>
              <CardTitleAndValue
                title="Note from the doctor"
                value={data.noteFromDoctor}
              />
              <CardTitleAndValue
                title="Note from the medical center"
                value={data.noteFromMedicalCenter}
              />
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCAUpcommingSessionPage;
