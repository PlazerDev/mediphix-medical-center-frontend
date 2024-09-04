import CardTitleAndValue from "../CardTitleAndValue";
import { Divider } from "antd";
import logo from "./../../assets/images/mcr/logoBlack.png";
import qr from "./../../assets/images/mcr/qr.png";
import paidSeal from "./../../assets/images/mcr/paidSeal.png";

function MCRPaymentRecieptContent() {
  return (
    <div>
      <div
        id="print-content"
        className="bg-mediphix_card_background rounded-lg w-96 flex flex-col justify-between items-center p-8"
      >
        <div className="w-full">
          <div className="flex flex-row justify-center">
            <img src={logo} alt="logo" className="object-contain w-32" />
          </div>
          <p className="font-bold mb-4 text-center">Payment Receipt</p>
          <Divider dashed style={{ borderColor: "#000" }}></Divider>
          <div className="w-full flex flex-row justify-between">
            <CardTitleAndValue title="Date" value="2024/June/13" />
            <CardTitleAndValue title="Time" value="08.30.23 AM" />
          </div>
          <Divider dashed style={{ borderColor: "#000" }}></Divider>
          <div className="w-full flex flex-row justify-between">
            <CardTitleAndValue title="Reference Number" value="REF_1653" />
            <CardTitleAndValue title="Queue Number" value="07" />
          </div>
          <div className="w-full">
            <CardTitleAndValue title="App. Category" value="OPD" />
            <CardTitleAndValue
              title="Doctor Name"
              value="Dr. A.D.N. Amarathunge"
            />
          </div>
          <div className="w-full flex flex-row justify-between">
            <CardTitleAndValue title="Date" value="2024/June/13" />
            <CardTitleAndValue title="Time Slot" value="03.00 PM - 04.00 PM" />
          </div>
          <div className="flex flex-row justify-center mt-4">
            <img src={qr} alt="QR Code" className="object-contain w-32" />
          </div>
          <Divider style={{ borderColor: "#000" }} dashed></Divider>
        </div>
        <div className="w-full">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm text-center">Amount</p>
            <p className="font-bold text-2xl text-center">Rs. 1950.00</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2">
          <img src={paidSeal} alt="Seal" className="object-contain w-32" />
        </div>
        <Divider dashed style={{ borderColor: "#000" }}></Divider>
      </div>
    </div>
  );
}

export default MCRPaymentRecieptContent;
