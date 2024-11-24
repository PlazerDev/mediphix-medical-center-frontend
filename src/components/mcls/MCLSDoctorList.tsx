import { LabReportsService } from "../../services/mcls/LabReportsService";
import doctorImg from "./../../assets/images/mcs/doctorImage.jpeg";
import CardTitleAndValue from "../CardTitleAndValue";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

function MCLSDoctorList() {
  const navigate = useNavigate();

  const data = LabReportsService.getSampleDoctorList();

  function doctorCardHandler(id: string) {
    navigate("/medicalCenterLabStaff/ourDoctors/" + id);
  }

  return (
    <div className="mt-4">
      <Row gutter={[12, 16]}>
        {data.map((item) => (
          <Col span={6}>
            <div
              className="flex items-center bg-mediphix_card_background h-full p-4 rounded-md gap-2 hover:shadow-lg hover:cursor-pointer"
              onClick={() => {
                doctorCardHandler(item.id);
              }}
            >
              <div>
                <img
                  src={doctorImg}
                  alt="Doctor Profile Image"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div>
                <CardTitleAndValue title="Name" value={item.name} />
                <CardTitleAndValue
                  title="Supported Appointment Categories"
                  value={item.supportedAppointmentCategories.join(", ")}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MCLSDoctorList;
