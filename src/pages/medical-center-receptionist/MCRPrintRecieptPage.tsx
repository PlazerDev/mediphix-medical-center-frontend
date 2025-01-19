import { useEffect } from "react";
import MCRPaymentRecieptContent from "../../components/mcr/MCRPaymentRecieptContent";
import { useLocation } from "react-router-dom";

function MCRPrintRecieptPage() {
  useEffect(() => {
    window.print();
  }, []);

  const query = new URLSearchParams(useLocation().search);
  const data = JSON.parse(decodeURIComponent(query.get("data") || "{}"));

  return (
    <div className="flex justify-center">
      <MCRPaymentRecieptContent data={data} />
    </div>
  );
}

export default MCRPrintRecieptPage;
