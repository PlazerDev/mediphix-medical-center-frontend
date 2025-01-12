import MCRPaymentAppointmentDetailCard from "./MCRPaymentAppointmentDetailCard";
import MCRPaymentDoctorCard from "./MCRPaymentDoctorCard";
import MCRPaymentPatientCard from "./MCRPaymentPatientCard";
import MCRPaymentReciept from "./MCRPaymentReciept";
import MCRPaymentUnpaidCard from "./MCRPaymentUnpaidCard";

interface Props {
  flag: boolean;
}
function MCRPaymentBody({ flag }: Props) {
  return (
    <div className="mt-8 flex flex-row gap-4 justify-between">
      <div className="flex-1 flex flex-col gap-4">
        <MCRPaymentAppointmentDetailCard />
        <MCRPaymentPatientCard />
        <MCRPaymentDoctorCard />
      </div>
      {/* For Unpaid Appointments  */}
      {!flag && <MCRPaymentUnpaidCard />}

      {/* For Paid Appointments  */}
      {flag && <MCRPaymentReciept />}
    </div>
  );
}

export default MCRPaymentBody;
