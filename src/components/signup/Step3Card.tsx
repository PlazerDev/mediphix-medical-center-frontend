import { Button, Divider, Image } from "antd";
import CustomCardTitleAndValue from "./CustomCardTitleAndValue";
import { FinalCenterAdminData } from "./SignUpCardBody";
import { useLoading } from "../../contexts/LoadingContext";
import { UserService } from "../../services/user/UserService";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

interface Props {
  formData: FinalCenterAdminData;
  backBtnHandler: () => void;
}
function Step3Card({ formData, backBtnHandler }: Props) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const registerBtnHandler = () => {
    startLoading();
    UserService.registerMedicalCenterAndAdmin(formData, stopLoading, navigate);
  };

  if (!isLoading) {
    return (
      <div className="py-4">
        <p className="text-mediphix_text_c">
          Here is a preview of the details you have been entered.
        </p>
        <div className="flex flex-col gap-2 my-4">
          <p>Medical Center Details</p>
          <Image
            className=" my-2"
            width={68}
            src={
              "https://mediphix-bucket.s3.ap-southeast-1.amazonaws.com/medical-center-resources/" +
              formData.mcData.email.split("@").join("") +
              "/logo"
            }
          />
          <div className="flex justify-between">
            <CustomCardTitleAndValue
              title="Name"
              value={formData.mcData.name}
            />
            <CustomCardTitleAndValue
              title="Mobile"
              value={formData.mcData.mobile}
            />
            <CustomCardTitleAndValue
              title="District"
              value={formData.mcData.district}
            />
            <CustomCardTitleAndValue
              title="Email"
              value={formData.mcData.email}
            />
          </div>
          <div>
            <CustomCardTitleAndValue
              title="Address"
              value={formData.mcData.address}
            />
          </div>
          <div>
            <CustomCardTitleAndValue
              title="Description"
              value={formData.mcData.specialNotes}
            />
          </div>
          <Divider />
          <p>Administrator Details</p>
          <Image
            className="my-2"
            width={68}
            src={
              "https://mediphix-bucket.s3.ap-southeast-1.amazonaws.com/mca-resources/" +
              formData.mcaData.email.split("@").join("") +
              "/profileImage"
            }
          />
          <div className="flex justify-center">
            <CustomCardTitleAndValue
              title="Name"
              value={formData.mcaData.name}
            />
            <CustomCardTitleAndValue
              title="Email"
              value={formData.mcaData.email}
            />
            <CustomCardTitleAndValue
              title="Mobile"
              value={formData.mcaData.mobile}
            />
            <CustomCardTitleAndValue title="NIC" value={formData.mcaData.nic} />
          </div>
        </div>
        {/* Register Button */}
        <div className="flex justify-end my-4 gap-2">
          <Button
            htmlType="submit"
            className="px-4 py-2 rounded-lg"
            onClick={backBtnHandler}
          >
            Back
          </Button>
          <Button
            onClick={registerBtnHandler}
            type="primary"
            htmlType="submit"
            className="bg-mediphix_accent hover:bg-[#ff841f] px-4 py-2 text-mediphix_card_background rounded-lg"
          >
            Register
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col my-16">
        <Loading />
      </div>
    );
  }
}

export default Step3Card;
