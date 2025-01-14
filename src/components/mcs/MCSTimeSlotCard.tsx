import { Button, Divider, Steps } from "antd";
import { useState } from "react";
import CardTitleAndValue from "../CardTitleAndValue";
import { TimeService } from "../../services/TimeService";
import { SessionService } from "../../services/mca/SessionService";

interface Prop {
  data: any;
}

function MCSTimeSlotCard({ data }: Prop) {
  const [current, setCurrent] = useState(0);

  const startableData: [string, boolean] | null =
    SessionService.getNextStartableSlotIndex(data.timeSlots);

  return (
    <div className="bg-mediphix_card_background rounded-lg p-8">
      <p className="font-bold mb-4">Time Slot Details</p>
      {data.timeSlots.map((slot: any) => (
        <div className="mb-2">
          <p className="font-bold">{"Slot " + slot.slotId}</p>
          <div className="flex md:flex-row flex-col gap-2 md:gap-0">
            <CardTitleAndValue
              title="Start Time - End Time"
              value={
                slot.startTime + " - " + TimeService.addOneHour(slot.startTime)
              }
            />
            <CardTitleAndValue
              title="Maximum Number of Patient Sessions"
              value={slot.maxNoOfPatients}
            />
            <CardTitleAndValue title="Status" value={slot.status} />
          </div>
        </div>
      ))}
      <Divider />
      <div className="flex justify-end">
        {startableData == null && <Button danger>End the Session</Button>}
        {startableData != null && startableData[1] == false && (
          <Button type="primary">
            {"End the Time Slot " + startableData[0]}
          </Button>
        )}
        {startableData != null && startableData[1] == true && (
          <Button type="primary">
            {"Start Time Slot " + startableData[0]}
          </Button>
        )}
      </div>
    </div>
  );
}

export default MCSTimeSlotCard;
