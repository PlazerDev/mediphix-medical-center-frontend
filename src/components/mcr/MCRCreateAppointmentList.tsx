import { AppointmentDataRecord } from "../../services/mcr/AppointmentService";
import CardTitleAndValue from "../CardTitleAndValue";
import { Button, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  data: AppointmentDataRecord[];
}
function MCRCreateAppointmentList({ data }: Props) {
  const navigate = useNavigate();
  function proceedBtnHandler(id: string) {
    navigate("/medicalCenterReceptionist/appointments/createNew/" + id);
  }
  return (
    <div className="mt-4 bg-mediphix_card_background p-8 rounded-lg flex flex-col gap-4">
      {data.map((item) => (
        <div className="border-2 border-mediphix_text_d p-4 rounded-lg flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Doctor Name</p>
              <p className="text-mediphix_accent underline">
                {item.doctorName}
              </p>
            </div>
            <CardTitleAndValue
              title="Appointment Category"
              value={item.appointmentCategories.join(", ")}
            />
          </div>
          <div className="flex items-center justify-between">
            <CardTitleAndValue title="Date" value={item.date} />
            <CardTitleAndValue
              title="Time"
              value={item.startTime + " - " + item.endTime}
            />
          </div>
          <CardTitleAndValue
            title="Note From Doctor"
            value={item.noteFromDoctor}
          />
          <CardTitleAndValue
            title="Note From Medical Center"
            value={item.noteFromMedicalCenter}
          />
          <div className="row flex justify-end w-full">
            {item.isAllBooked && (
              <Tag icon={<ExclamationCircleOutlined />} color="warning">
                Appointment is fully booked
              </Tag>
            )}
            {!item.isAllBooked && (
              <Button
                onClick={() => {
                  proceedBtnHandler(item.id);
                }}
              >
                Proceed
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MCRCreateAppointmentList;
