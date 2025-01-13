import MCRPaymentAppointmentDetailCard from "./MCRPaymentAppointmentDetailCard";
import MCRPaymentDoctorCard from "./MCRPaymentDoctorCard";
import MCRPaymentPatientCard from "./MCRPaymentPatientCard";
import MCRPaymentReciept from "./MCRPaymentReciept";
import MCRPaymentUnpaidCard from "./MCRPaymentUnpaidCard";

interface Props {
  data: any;
}
function MCRPaymentBody({ data }: Props) {
  return (
    <div className="mt-8 flex flex-row gap-4 justify-between">
      <div className="flex-1 flex flex-col gap-4">
        <MCRPaymentAppointmentDetailCard data={data.aptAndSessionDetails} />
        <MCRPaymentPatientCard data={data.patientDetails} />
        <MCRPaymentDoctorCard data={data.doctorDetails} />
      </div>
      {/* For Unpaid Appointments  */}
      {!data.paymentDetails.isPaid && <MCRPaymentUnpaidCard data={data} />}

      {/* For Paid Appointments  */}
      {data.paymentDetails.isPaid && <MCRPaymentReciept data={data} />}
    </div>
  );
}

export default MCRPaymentBody;
