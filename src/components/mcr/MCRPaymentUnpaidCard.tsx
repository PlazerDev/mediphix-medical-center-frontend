import NormalButton from "../NormalButton";
import btnImg from "./../../assets/images/mcr/pattern.png";

interface Props {
  data: any;
}
function MCRPaymentUnpaidCard({ data }: Props) {
  return (
    <div className=" bg-mediphix_card_background rounded-lg w-96 flex flex-col justify-between items-center pb-8">
      <div className="relative w-full h-40 flex flex-col justify-center items-center rounded-tl-lg rounded-tr-lg rounde">
        <img
          src={btnImg}
          alt="Button Image"
          className="h-full w-full absolute top-0 mix-blend-luminosity object-cover opacity-80"
        />
        <p className="font-bold text-lg">Payment Details</p>
      </div>
      <div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-mediphix_text_c text-sm">Payment Amount</p>
          <p className="font-bold text-4xl">
            {"Rs. " + data.paymentDetails.amount + ".00"}
          </p>
        </div>
      </div>
      <div className="h-10">
        <NormalButton colorType={2} link="" title="Accept the Payment" />
      </div>
    </div>
  );
}

export default MCRPaymentUnpaidCard;
