import { useEffect } from "react";
import MCRPaymentRecieptContent from "../../components/mcr/MCRPaymentRecieptContent";

function MCRPrintRecieptPage() {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="flex justify-center">
      <MCRPaymentRecieptContent />
    </div>
  );
}

export default MCRPrintRecieptPage;
