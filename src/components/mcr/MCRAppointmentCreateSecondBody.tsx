import { useState } from "react";
import {
  AppointmentService,
  PatientDetailsRecord,
} from "../../services/mcr/AppointmentService";
import CardTitleAndValue from "../CardTitleAndValue";
import docImg from "./../../assets/images/mcs/doctorImage.jpeg";
import { Button, Input, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MCRAppointmentCreateSecondBody() {
  const data = AppointmentService.getSampleDetailedAppointmentData();
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [patientData, setPatientData] = useState<PatientDetailsRecord>();

  const handleCardClick = (id: string) => {
    setSelectedSlotId(id); // Update the selected slot ID
    console.log("Selected Time Slot ID:", id);
  };

  const searchBtnHandler = () => {
    if (!patientData) {
      setPatientData(data.patientData);
    } else {
      setPatientData(undefined);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-mediphix_card_background p-8 rounded-lg">
        <p className="font-bold mb-2">Details of the appointment</p>
        <div className="flex flex-col justify-center gap-1">
          <div className="flex justify-between items-center">
            <CardTitleAndValue
              title="Time Frame"
              value={
                data.appointmentData.startTime +
                " - " +
                data.appointmentData.endTime
              }
            />
            <CardTitleAndValue title="Date" value={data.appointmentData.date} />
            <CardTitleAndValue
              title="Appointment Categories"
              value={data.appointmentData.appointmentCategories.join(", ")}
            />
          </div>
        </div>
        <p className="font-bold mt-4 mb-2">Doctor Detail</p>
        <div className="flex flex-col gap-1">
          <div>
            <img
              src={docImg}
              alt="Doctor Image"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Doctor Name</p>
            <p className="underline text-mediphix_accent">
              {data.appointmentData.doctorName}
            </p>
          </div>
        </div>
        <p className="font-bold mt-4 mb-2">Additional Detail</p>
        <div className="gap-1 flex flex-col">
          <CardTitleAndValue
            title="Note from doctor"
            value={data.appointmentData.noteFromDoctor}
          />
          <CardTitleAndValue
            title="Note from medical center"
            value={data.appointmentData.noteFromMedicalCenter}
          />
        </div>
      </div>
      <div className="bg-mediphix_card_background p-8 rounded-lg">
        <p className="font-bold pb-2">Select the time slot</p>
        <div className="flex flex-col gap-2">
          {data.timeSlotData.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between items-center p-4 border-2 rounded-lg cursor-pointer ${
                selectedSlotId === item.id
                  ? "border-mediphix_accent"
                  : "border-mediphix_text_d"
              }`}
              onClick={() => handleCardClick(item.id)}
            >
              <CardTitleAndValue
                title="Time Slot"
                value={item.startTime + " - " + item.endTime}
              />
              <CardTitleAndValue
                title="Maximum number of Patients"
                value={item.maxNumberOfPatients}
              />
              <CardTitleAndValue
                title="Current Last Queue Number"
                value={item.currentLastQueueNumber}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-mediphix_card_background p-8 rounded-lg">
        <p className="font-bold mb-2">Patient Data</p>
        <div className="flex gap-4 w-1/2">
          <Input
            placeholder="Enter Patient Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Button onClick={searchBtnHandler}>Search Patient</Button>
        </div>
        <div>
          {patientData?.name && (
            <div className="mt-2 flex justify-between items-center border-2 border-mediphix_text_b rounded-lg p-4">
              <CardTitleAndValue title="Name" value={patientData.name} />
              <CardTitleAndValue title="Age" value={patientData.age} />
              <CardTitleAndValue
                title="Mobile Number"
                value={patientData.mobileNumber}
              />
              <CardTitleAndValue title="Gender" value={patientData.gender} />
              <CardTitleAndValue
                title="Nationality"
                value={patientData.nationality}
              />
            </div>
          )}
          {patientData === undefined && (
            <div className="mt-2">
              <Tag
                icon={<ExclamationCircleOutlined />}
                color="warning"
                className="text-md font-bold"
              >
                No Patient Data Found
              </Tag>
              <Link
                to="/medicalCenterReceptionist/registerPatient"
                className="text-mediphix_accent underline"
              >
                Register a patient
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          disabled={selectedSlotId == null && patientData === undefined}
        >
          Book the Appointment
        </Button>
      </div>
    </div>
  );
}

export default MCRAppointmentCreateSecondBody;
