import NormalButton from "../NormalButton";
import MCRPaymentAppointmentDetailCard from "./MCRPaymentAppointmentDetailCard";
import MCRPaymentDoctorCard from "./MCRPaymentDoctorCard";
import MCRPaymentPatientCard from "./MCRPaymentPatientCard";
import btnImg from "./../../assets/images/mcr/pattern.png";

function MCRUnpaid() {
  return (
    <div className="mt-8 flex flex-row gap-4 justify-between">
      <div className="flex-1 flex flex-col gap-4">
        <MCRPaymentAppointmentDetailCard />
        <MCRPaymentPatientCard />
        <MCRPaymentDoctorCard />
      </div>
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
            <p className="font-bold text-4xl">Rs. 1, 950.00</p>
          </div>
        </div>
        <div className="h-10">
          <NormalButton colorType={2} link="" title="Accept the Payment" />
        </div>
      </div>
    </div>
  );
}

export default MCRUnpaid;
