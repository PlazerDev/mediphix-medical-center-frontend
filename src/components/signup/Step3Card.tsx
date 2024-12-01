import { Button } from "antd";

import { UserData } from "./SignUpCardBody";
import CustomCardTitleAndValue from "./CustomCardTitleAndValue";

interface Props {
  formData: Partial<UserData>;
}
function Step3Card({ formData }: Props) {
  return (
    <div className="py-4">
      <p className="text-mediphix_text_c">
        Here is a preview of the details you have been entered.
      </p>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex justify-between">
          <CustomCardTitleAndValue
            title="Name With Initials"
            value={"Dr. " + formData.name}
          />
          <CustomCardTitleAndValue title="Email" value={formData.email} />
          <CustomCardTitleAndValue
            title="Mobile Number"
            value={formData.mobileNumber}
          />
        </div>
        <div className="flex justify-center">
          <div style={{ flex: 1 }}>
            <CustomCardTitleAndValue
              title="District"
              value={formData.district}
            />
          </div>
          <div style={{ flex: 2 }}>
            <CustomCardTitleAndValue title="Address" value={formData.address} />
          </div>
        </div>
      </div>
      {/* Register Button */}
      <div className="flex justify-end">
        <Button
          type="primary"
          className="bg-mediphix_accent hover:bg-[#ff841f] px-4 py-2 text-mediphix_card_background rounded-lg"
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Step3Card;
