import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import backImg from "./../../assets/images/mcls/background.gif";
import { TbReportSearch } from "react-icons/tb";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSCustomButton from "../../components/mcs/MCSCustomButton";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

function MCLSHomePage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
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
          <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
              <p className="text-xl md:text-2xl font-bold">
                Welocome,
                <br />
                Here is your control center
              </p>
              <img
                src={backImg}
                alt="body"
                className="w-32 my-2 md:my-0 md:w-60 object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
              <MCSCustomButton
                path="/medicalCenterLabStaff/labReports"
                buttonTitle="Manage Lab Reports"
                isPrimary={true}
                buttonIcon={TbReportSearch}
              />
              <MCSCustomButton
                path="/medicalCenterLabStaff/ourDoctors"
                buttonTitle="Our Doctors"
                isPrimary={false}
                buttonIcon={FaUserDoctor}
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

export default MCLSHomePage;
