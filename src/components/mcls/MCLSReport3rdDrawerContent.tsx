import React from "react";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import CardTitleAndValue from "../CardTitleAndValue";
import { Divider, Tag } from "antd";
import doctorImg from "./../../assets/images/mcs/doctorImage.jpeg";
import MCLSFileUploader from "./MCLSFileUploader";
import TextArea from "antd/es/input/TextArea";
import NormalButtonWithFunction from "../NormalButtonWithFunction";
import { RiAttachment2 } from "react-icons/ri";
import { CheckCircleOutlined } from "@ant-design/icons";

interface Props {
  id: string;
}
function MCLSReport3rdDrawerContent({ id }: Props) {
  const data = LabReportsService.getSampleReportInformation(id);
  return (
    <div>
      {/* Test Details  */}
      <div>
        <p className="font-bold mb-2">Test Details</p>
        <div>
          <div className="flex items-center justify-between">
            <CardTitleAndValue
              title="Test Name"
              value={data.testDetails.testName}
            />
            <CardTitleAndValue
              title="Test Type"
              value={data.testDetails.testTypes}
            />
            <CardTitleAndValue
              title="Requested Date"
              value={data.testDetails.requestedDate}
            />
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Priority Level</p>
              <p className={data.testDetails.isUrgent ? "text-red-400" : ""}>
                {data.testDetails.isUrgent ? "URGENT" : "Normal"}
              </p>
            </div>
          </div>
          <div>
            <CardTitleAndValue
              title="Note"
              value={data.testDetails.noteFromDoctor}
            />
          </div>
        </div>
      </div>
      <Divider />
      {/* Patient Details  */}
      <div>
        <p className="font-bold mb-2">Patient Details</p>
        <div className="flex items-center justify-between">
          <CardTitleAndValue
            title="Patient Name"
            value={data.patientDetails.name}
          />
          <CardTitleAndValue
            title="Patient Age"
            value={data.patientDetails.age + ""}
          />
          <CardTitleAndValue title="" value="" />
          <CardTitleAndValue title="" value="" />
        </div>
      </div>
      <Divider />
      {/* Doctor Details  */}
      <div>
        <p className="font-bold mb-2">Doctor Details</p>
        <div>
          <div className="flex items-center justify-start gap-20">
            <div className="flex">
              <img
                src={doctorImg}
                alt="Doctor Image"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex-1">
                <p className="text-mediphix_text_c text-sm">Doctor Name</p>
                <p className="text-mediphix_accent underline">
                  {data.doctorDetails.name}
                </p>
              </div>
              <CardTitleAndValue
                title="Supported Appointment Category"
                value={data.doctorDetails.supportedAppointmentCategories.join(
                  ", "
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      {/* Progress Details  */}
      <div>
        <div className="flex  items-center justify-between">
          <p className="font-bold mb-2">Progress Details</p>
          <Tag icon={<CheckCircleOutlined />} color="success">
            Completed
          </Tag>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <CardTitleAndValue
              title="Test Started Date"
              value={data.progressDetails.testStartedDate}
            />
            <CardTitleAndValue
              title="Test Ended Date"
              value={data.progressDetails.testEndDate}
            />
            <CardTitleAndValue title="" value="" />
            <CardTitleAndValue title="" value="" />
          </div>
          <div>
            <CardTitleAndValue title="Note" value="N/A" />
          </div>
          <div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Uploaded Files</p>
              <div className="flex items-center gap-2">
                <RiAttachment2 />
                <p className="hover:cursor-pointer hover:text-mediphix_accent">
                  File 01.pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCLSReport3rdDrawerContent;
