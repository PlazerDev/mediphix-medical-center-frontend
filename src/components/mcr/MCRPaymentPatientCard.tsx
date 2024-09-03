import CardTitleAndValue from "../CardTitleAndValue";
import patientProfile from "./../../assets/images/mcr/patientProfile.jpg";

function MCRPaymentPatientCard() {
  return (
    <div className="p-8 bg-mediphix_card_background rounded-lg">
      <p className="font-bold mb-4">Patient Details</p>
      <div className="flex flex-row justify-between items-center gap-8">
        <div>
          <img
            src={patientProfile}
            alt="Patient Profile Photo"
            className="object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center mb-2">
            <CardTitleAndValue title="Name" value="Vishwa Sandaruwan" />
            <CardTitleAndValue title="Age" value="20 - 30" />
          </div>
          <div>
            <CardTitleAndValue title="Gender" value="Male" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCRPaymentPatientCard;
