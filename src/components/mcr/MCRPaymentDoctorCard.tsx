import { Link } from "react-router-dom";
import CardTitleAndValue from "../CardTitleAndValue";

interface Props {
  data: any;
}

function MCRPaymentDoctorCard({ data }: Props) {
  return (
    <div className="p-8 bg-mediphix_card_background rounded-lg">
      <p className="font-bold mb-4">Doctor Details</p>
      <div className="flex flex-row justify-between items-center gap-8">
        <div>
          <img
            src={data.profileImage}
            alt="Doctor Profile Photo"
            className="object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Name</p>
              <Link to="">
                <p className="text-mediphix_accent underline">{data.name}</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CardTitleAndValue title="Mobile" value={data.mobile} />
            <CardTitleAndValue
              title="Education"
              value={data.education.join(", ")}
            />
            <CardTitleAndValue
              title="Specialization"
              value={data.specialization.join(",  ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCRPaymentDoctorCard;
