import React, { useEffect, useState } from "react";
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
import { StorageService } from "../../services/StorageService";
import { useLoading } from "../../contexts/LoadingContext";
import { useAuthContext } from "@asgardeo/auth-react";
import { SessionService } from "../../services/mca/SessionService";
import CustomEmpty from "../../components/CustomEmpty";

function MCADoctorJoinRequestMainPage() {
  // setting loading
  const { startLoading, stopLoading, isLoading } = useLoading();
  const { getAccessToken } = useAuthContext();
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    startLoading();
    SessionService.getJoinReq(getAccessToken, setData, stopLoading);
  }, []);

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

  function acceptBtnHandler(reqId: string) {
    startLoading();
    SessionService.acceptJoinReq(reqId, getAccessToken, stopLoading);
    console.log("Req Id: ", reqId);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!isLoading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title={"Join Requests"}
            titleMemberName={""}
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          <div>
            <MCADoctorSearchBar />
            <div className="flex items-center gap-2">
              <MCADoctorSelections />
              <MCASortBySelections />
            </div>
            {data != null && (
              <Row gutter={16} className="mt-2">
                {data.map((item: any) => (
                  <Col className="gutter-row" span={8}>
                    <div className="flex items-center bg-mediphix_card_background p-4 rounded-lg mb-2 gap-4">
                      <div>
                        <img
                          src={item.profileImage}
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
                            {item.noOfCenters + " Partnered Medical Centers"}
                          </p>
                        </div>
                        <div className="flex flex-row gap-2 mt-2">
                          <div>
                            <NormalButtonWithFunction
                              colorType={2}
                              title="Accept"
                              handler={() => {
                                acceptBtnHandler(item.reqId);
                              }}
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
            )}
            {data == null && (
              <div className="mt-4">
                <CustomEmpty
                  msg="Currently we couldn't find any doctor join requests."
                  title="No join requests found"
                />
              </div>
            )}
          </div>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center mt-8">
          <Loading />
        </div>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCADoctorJoinRequestMainPage;
