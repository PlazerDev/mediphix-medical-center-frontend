import React from "react";
import CardTitleAndValue from "../CardTitleAndValue";
import { TimeService } from "../../services/TimeService";

interface Props {
  data: any;
}

function MCRPaymentAppointmentDetailCard({ data }: Props) {
  return (
    <div className="p-8 bg-mediphix_card_background rounded-lg">
      <p className="font-bold mb-4">Appointment Details</p>
      <div className="flex flex-row justify-between items-center mb-2">
        <CardTitleAndValue title="Appointment Number" value={data.aptNumber} />
        <CardTitleAndValue
          title="Date"
          value={TimeService.formatDate(data.startTimestamp)}
        />
        <CardTitleAndValue
          title="Time Slot"
          value={
            TimeService.formatTime(data.startTimestamp) +
            " - " +
            TimeService.formatTime(data.endTimestamp)
          }
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <CardTitleAndValue title="Queue Number" value={data.queueNumber} />
        <CardTitleAndValue title="Hall Number" value={data.hallNumber} />
        <CardTitleAndValue
          title="Appointment Created Timestamp"
          value={
            TimeService.formatDate(data.aptCreatedTimestamp) +
            " | " +
            TimeService.formatTime(data.aptCreatedTimestamp)
          }
        />
      </div>
      <CardTitleAndValue title="Note From Center" value={data.noteFromCenter} />
      <CardTitleAndValue title="Note From Doctor" value={data.noteFromDoctor} />
    </div>
  );
}

export default MCRPaymentAppointmentDetailCard;
