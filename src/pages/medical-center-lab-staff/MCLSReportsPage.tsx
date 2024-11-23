import React, { useState } from "react";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import ReportBacklogTitle from "../../components/mcls/MCLSReportBacklogTitle";
import { Button, Tooltip } from "antd";
import MCLSReport1stCol from "../../components/mcls/MCLSReport1stCol";
import MCLSReport2ndCol from "../../components/mcls/MCLSReport2ndCol";
import MCLSReport3rdCol from "../../components/mcls/MCLSReport3rdCol";

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
          <div className="rounded-lg flex justify-between gap-8">
            <MCLSReport1stCol />
            <MCLSReport2ndCol />
            <MCLSReport3rdCol />
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
