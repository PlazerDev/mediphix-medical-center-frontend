import React, { useState } from "react";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";

function MCLSReportsPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterLabStaff",
    },
    {
      title: "Lab Reports",
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
            title="Good Evening"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Lab Staff"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="bg-red-400 rounded-lg flex justify-between gap-8">
            <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
              <MCLSReportsPage />
            </div>
            <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
              In Progress
            </div>
            <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
              Done
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

export default MCLSReportsPage;
