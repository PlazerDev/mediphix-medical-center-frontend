import appImage from "./../../assets/images/mcr/searchAppointments.png";

function MCRPaymentsDefault() {
  return (
    <div className="mt-8 px-8 bg-mediphix_card_background py-8 rounded-lg flex flex-col justify-center items-center">
      <img
        src={appImage}
        alt="Search Appointment Number Image"
        className="object-contain w-96"
      />
      <p>
        Enter the appointment number or scan the QR code to get appointment
        details.
      </p>
    </div>
  );
}

export default MCRPaymentsDefault;
