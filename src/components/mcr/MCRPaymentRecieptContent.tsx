import CardTitleAndValue from "../CardTitleAndValue";
import { Divider } from "antd";
import logo from "./../../assets/images/mcr/logoBlack.png";
import qr from "./../../assets/images/mcr/qr.png";
import paidSeal from "./../../assets/images/mcr/paidSeal.png";
import { TimeService } from "../../services/TimeService";

interface Props {
  data: any;
}
function MCRPaymentRecieptContent({ data }: Props) {
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
            <CardTitleAndValue
              title="Date"
              value={TimeService.formatDate(
                data.paymentDetails.paymentTimestamp
              )}
            />
            <CardTitleAndValue
              title="Time"
              value={TimeService.formatTime(
                data.paymentDetails.paymentTimestamp
              )}
            />
          </div>
          <Divider dashed style={{ borderColor: "#000" }}></Divider>
          <div className="w-full flex flex-row justify-between">
            <CardTitleAndValue
              title="Appointment Number"
              value={data.aptAndSessionDetails.aptNumber}
            />
            <CardTitleAndValue
              title="Queue Number"
              value={data.aptAndSessionDetails.queueNumber}
            />
          </div>
          <div className="w-full">
            <CardTitleAndValue title="App. Category" value="OPD" />
            <CardTitleAndValue
              title="Doctor Name"
              value={"Dr. " + data.doctorDetails.name}
            />
          </div>
          <div className="w-full flex flex-row justify-between">
            <CardTitleAndValue
              title="Date"
              value={TimeService.formatDate(
                data.aptAndSessionDetails.startTimestamp
              )}
            />
            <CardTitleAndValue
              title="Time Slot"
              value={
                TimeService.formatTime(
                  data.aptAndSessionDetails.startTimestamp
                ) +
                " - " +
                TimeService.formatTime(data.aptAndSessionDetails.endTimestamp)
              }
            />
          </div>
          <div className="flex flex-row justify-center mt-4">
            <img src={qr} alt="QR Code" className="object-contain w-32" />
          </div>
          <Divider style={{ borderColor: "#000" }} dashed></Divider>
        </div>
        <div className="w-full">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm text-center">Amount</p>
            <p className="font-bold text-2xl text-center">
              {"Rs. " + data.paymentDetails.amount + ".00"}
            </p>
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
