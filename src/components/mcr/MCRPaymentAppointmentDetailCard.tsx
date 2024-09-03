import React from "react";
import CardTitleAndValue from "../CardTitleAndValue";

function MCRPaymentAppointmentDetailCard() {
  return (
    <div className="p-8 bg-mediphix_card_background rounded-lg">
      <p className="font-bold mb-4">Appointment Details</p>
      <div className="flex flex-row justify-between items-center mb-2">
        <CardTitleAndValue title="Reference Number" value="REF_1653" />
        <CardTitleAndValue title="Date" value="2024/June/13" />
        <CardTitleAndValue title="Time Slot" value="03.00 PM - 04.00 PM" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <CardTitleAndValue title="Queue Number" value="07" />
        <CardTitleAndValue title="Location" value="HALL - A" />
        <CardTitleAndValue title="Status" value="Active" />
      </div>
    </div>
  );
}

export default MCRPaymentAppointmentDetailCard;
