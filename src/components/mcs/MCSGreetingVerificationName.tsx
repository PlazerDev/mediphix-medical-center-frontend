import { HiCheckBadge } from "react-icons/hi2";
import companyLogo from "./../../assets/images/mcs/medical_center_logo.png";

interface Props {
  medicalCenterName: string;
  role: string;
}

function MCSGreetingVerificationName({ medicalCenterName, role }: Props) {
  return (
    <div className="bg-mediphix_card_background inline-flex items-center gap-4 px-4 py-2 rounded-lg">
      <img src={companyLogo} className="rounded-2xl w-12 h-12" />
      <div>
        <p className="font-bold text-mediphix_accent">{role}</p>
        <p>at {medicalCenterName}</p>
      </div>
      <HiCheckBadge className="text-2xl text-mediphix_accent" />
    </div>
  );
}

export default MCSGreetingVerificationName;
