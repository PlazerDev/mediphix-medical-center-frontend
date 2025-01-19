import { Badge } from "antd";
import NormalButtonWithIcon from "../NormalButtonWithIcon";
import { FaPrint } from "react-icons/fa6";
import MCRPaymentRecieptContent from "./MCRPaymentRecieptContent";

interface Props {
  data: any;
}
function MCRPaymentReciept({ data }: Props) {
  const handlePrintClick = () => {
    // Open the URL in a new tab
    const serializedData = encodeURIComponent(JSON.stringify(data));
    window.open(
      `http://localhost:5175/medicalCenterReceptionist/appointments/payment/print?data=${serializedData}`,
      "_blank"
    );
  };
  return (
    <div>
      <Badge.Ribbon text="Payment Receipt" color="#FF7300">
        <MCRPaymentRecieptContent data={data} />
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
