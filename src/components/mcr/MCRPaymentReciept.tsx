import { Badge } from "antd";
import NormalButtonWithIcon from "../NormalButtonWithIcon";
import { FaPrint } from "react-icons/fa6";
import MCRPaymentRecieptContent from "./MCRPaymentRecieptContent";

function MCRPaymentReciept() {
  const handlePrintClick = () => {
    // Open the URL in a new tab
    window.open(
      "http://localhost:5175/medicalCenterReceptionist/appointments/payment/print/45646521",
      "_blank"
    );
  };
  return (
    <div>
      <Badge.Ribbon text="Payment Receipt" color="#FF7300">
        <MCRPaymentRecieptContent />
      </Badge.Ribbon>

      <div className="mt-4 h-12" onClick={handlePrintClick}>
        <NormalButtonWithIcon
          buttonIcon={FaPrint}
          colorType={2}
          link=""
          title="Print Receipt"
        />
      </div>
    </div>
  );
}

export default MCRPaymentReciept;
