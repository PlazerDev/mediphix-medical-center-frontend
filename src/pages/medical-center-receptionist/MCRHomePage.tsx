import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

function MCRHomePage() {
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterReceptionist",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Good Evening"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Receptionist"
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

export default MCRHomePage;
