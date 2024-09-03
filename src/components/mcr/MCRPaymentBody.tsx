import MCRPaymentAppointmentDetailCard from "./MCRPaymentAppointmentDetailCard";
import MCRPaymentDoctorCard from "./MCRPaymentDoctorCard";
import MCRPaymentPatientCard from "./MCRPaymentPatientCard";
import MCRPaymentReciept from "./MCRPaymentReciept";

function MCRPaymentBody() {
  return (
    <div className="mt-8 flex flex-row gap-4 justify-between">
      <div className="flex-1 flex flex-col gap-4">
        <MCRPaymentAppointmentDetailCard />
        <MCRPaymentPatientCard />
        <MCRPaymentDoctorCard />
      </div>
      {/* For Unpaid Appointments  */}
      {/* <MCRPaymentUnpaidCard /> */}
      {/* For Paid Appointments  */}
      <MCRPaymentReciept />
    </div>
  );
}

export default MCRPaymentBody;
