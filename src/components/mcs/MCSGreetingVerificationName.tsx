import { HiCheckBadge } from "react-icons/hi2";
import defaultCompanyLogo from "./../../assets/images/mcs/medical_center_logo.jpg";
import defaultProfileLogo from "./../../assets/images/mcs/user.png";
import { Divider } from "antd";
import { StorageService } from "../../services/StorageService";

interface Props {
  medicalCenterName?: string;
  role: string;
}

function MCSGreetingVerificationName({ medicalCenterName, role }: Props) {
  const centerPic = StorageService.getMedicalCenterProfileImage() || "";
  const adminPic = StorageService.getUserProfileImage() || "";
  const centerName = StorageService.getMedicalCenterName() || "";

  return (
    <div className="bg-mediphix_card_background inline-flex items-center gap-4 px-4 py-2 rounded-lg">
      <div className="flex items-center">
        <img
          src={centerPic == "" ? defaultCompanyLogo : centerPic}
          className=" w-12 h-12 object-cover"
        />
        <Divider type="vertical" style={{ borderColor: "#000" }} />
        <img
          src={adminPic == "" ? defaultProfileLogo : adminPic}
          className=" w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="font-bold text-mediphix_accent">{role}</p>
        <p>at {centerName == "" ? "Error Occured!" : centerName}</p>
      </div>
      <HiCheckBadge className="text-2xl text-mediphix_accent" />
    </div>
  );
}

export default MCSGreetingVerificationName;
