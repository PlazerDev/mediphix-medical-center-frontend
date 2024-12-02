import React, { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCADoctorSearchBar from "../../components/mca/MCADoctorSearchBar";

import MCASortBySelections from "../../components/mca/MCASortBySelections";
import MCADoctorSelections from "../../components/mca/MCADoctorSelections";
import { DoctorService } from "../../services/mca/DoctorService";
import docImg from "./../../assets/images/mcs/doctorImage.jpeg";
import NormalButtonWithFunction from "../../components/NormalButtonWithFunction";
import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";

function MCADoctorJoinRequestMainPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Doctors",
      link: "/medicalCenterAdmin/doctors",
    },
    {
      title: "Join Requests",
      link: "",
    },
  ];

  const data = DoctorService.getSampleDoctorRequestList();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Join Requests"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div>
            <MCADoctorSearchBar />
            <div className="flex items-center gap-2">
              <MCADoctorSelections />
              <MCASortBySelections />
            </div>
            <Row gutter={16} className="mt-2">
              {data.map((item) => (
                <Col className="gutter-row" span={8}>
                  <div className="flex items-center bg-mediphix_card_background p-4 rounded-lg mb-2 gap-4">
                    <div>
                      <img
                        src={docImg}
                        alt="Doctor Iamge"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div>
                        <Link
                          to={
                            "/medicalCenterAdmin/doctors/joinRequests/" +
                            item.id
                          }
                          className="font-bold text-mediphix_accent underline"
                        >
                          {item.name}
                        </Link>
                        <p>
                          {item.noOfMedicalCenters +
                            " Partnered Medical Centers"}
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <div>
                          <NormalButtonWithFunction
                            colorType={2}
                            title="Accept"
                            handler={() => {}}
                          />
                        </div>
                        <div>
                          <NormalButtonWithFunction
                            colorType={1}
                            title="Reject"
                            handler={() => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCADoctorJoinRequestMainPage;
