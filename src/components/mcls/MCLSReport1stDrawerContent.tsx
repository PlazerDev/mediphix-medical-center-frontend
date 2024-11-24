import { Divider } from "antd";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import CardTitleAndValue from "../CardTitleAndValue";
import doctorImg from "./../../assets/images/mcs/doctorImage.jpeg";
import NormalButtonWithFunction from "../NormalButtonWithFunction";

interface Props {
  id: string;
}

function MCLSReport1stDrawerContent({ id }: Props) {
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
      {/* Action Button */}
      <div className="flex items-center justify-center">
        <NormalButtonWithFunction
          colorType={2}
          handler={() => {}}
          title="Begin Testing"
        />
      </div>
    </div>
  );
}

export default MCLSReport1stDrawerContent;
