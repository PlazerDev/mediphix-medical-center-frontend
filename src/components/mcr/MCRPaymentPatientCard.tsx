import CardTitleAndValue from "../CardTitleAndValue";

interface Props {
  data: any;
}

function MCRPaymentPatientCard({ data }: Props) {
  return (
    <div className="p-8 bg-mediphix_card_background rounded-lg">
      <p className="font-bold mb-4">Patient Details</p>
      <div className="flex flex-row justify-between items-center gap-8">
        <div>
          <img
            src={data.profileImage}
            alt="Patient Profile Photo"
            className="object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center mb-2">
            <CardTitleAndValue title="Name" value={data.name} />
            <CardTitleAndValue title="Age" value={data.age} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCRPaymentPatientCard;
