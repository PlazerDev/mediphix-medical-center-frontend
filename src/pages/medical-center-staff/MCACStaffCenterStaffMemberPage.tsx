import { useState } from "react";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import { StaffService } from "../../services/mca/StaffService";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Col, Divider, Row } from "antd";
import nursesImg from "./../../assets/images/mcs/nurse.png";
import { Button, ConfigProvider, Flex } from "antd";

function MCACStaffCenterStaffMemberPage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Staff",
      link: "/medicalCenterAdmin/staff",
    },
    {
      title: "Medical Center Staff Member",
      link: "",
    },
  ];

  const data = StaffService.getSampleStaffMemberList();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Medical Center Staff Members"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex items-center justify-center h-full mb-4">
            <div className="p-4 bg-mediphix_card_background rounded-s-lg flex-1 ">
              <input
                type="text"
                placeholder="Enter Employee Name"
                className="outline-none w-full"
              />
            </div>
            <div className="h-full bg-mediphix_accent py-4 px-8 rounded-e-lg hover:bg-[#ff7300] hover:cursor-pointer">
              <p className="text-white">Search</p>
            </div>
          </div>
          <Row gutter={16}>
            {data.map((item) => (
              <Col className="gutter-row" span={8}>
                <div className="bg-mediphix_card_background rounded-lg p-8 mb-4">
                  <div className="flex items-center justify-center  gap-4">
                    <div>
                      <img src={nursesImg} alt="Profile Photo" />
                    </div>
                    <div className="flex-1  flex flex-col gap-2">
                      <CardTitleAndValue
                        title="Employee ID"
                        value={item.empID}
                      />
                      <CardTitleAndValue title="Name" value={item.name} />

                      <CardTitleAndValue title="Email" value={item.email} />
                      <CardTitleAndValue
                        title="Mobile Number"
                        value={item.mobileNumber}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCACStaffCenterStaffMemberPage;
