import { Steps } from "antd";
import logo from "./../../assets/images/mediphix.jpg";
import { useState } from "react";
import Step1Card from "./Step1Card";
import Step2Card from "./Step2Card";
import Step3Card from "./Step3Card";

export interface CenterData {
  name: string;
  address: string;
  district: string;
  mobile: string;
  email: string;
  specialNotes: string;
}

export interface AdminData {
  email: string;
  nic: string;
  name: string;
  mobile: string;
  password: string;
}

export interface finalCenterAdminData {
  mcaData: AdminData;
  mcData: CenterData;
}

function SignUpCardBody() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<finalCenterAdminData>({
    mcaData: {
      email: "",
      nic: "",
      name: "",
      mobile: "",
      password: "",
    },
    mcData: {
      name: "",
      address: "",
      district: "",
      mobile: "",
      email: "",
      specialNotes: "",
    },
  });

  function nextBtnHandler1(data: CenterData) {
    setFormData((prev) => ({
      ...prev,
      mcData: data,
    }));
    setCurrentStep(currentStep + 1);
    console.log("Next Button Clicked", data);
  }

  function nextBtnHandler2(data: AdminData) {
    setFormData((prev) => ({
      ...prev,
      mcaData: data,
    }));
    setCurrentStep(currentStep + 1);
    console.log("Next Button Clicked", data);
  }

  function backBtnHandler() {
    setCurrentStep(currentStep - 1);
    console.log("Back Button Clicked");
  }

  return (
    <div className="bg-mediphix_card_background rounded-lg w-full px-8 mx-40 my-16">
      <div className="flex items-center justify-center">
        <img src={logo} alt="" className="w-24" />
      </div>
      <div>
        <Steps
          size="small"
          current={currentStep}
          items={[
            {
              title: "Center Details",
            },
            {
              title: "Admin Details",
            },
            {
              title: "Preview",
            },
          ]}
        />
      </div>
      <div>
        {currentStep === 0 && (
          <Step1Card
            nextBtnHandler={nextBtnHandler1}
            backBtnHandler={backBtnHandler}
            initialData={formData.mcData}
          />
        )}
        {currentStep === 1 && (
          <Step2Card
            nextBtnHandler={nextBtnHandler2}
            backBtnHandler={backBtnHandler}
            initialData={formData.mcaData}
          />
        )}
        {currentStep === 2 && (
          <Step3Card formData={formData} backBtnHandler={backBtnHandler} />
        )}
      </div>
    </div>
  );
}

export default SignUpCardBody;
