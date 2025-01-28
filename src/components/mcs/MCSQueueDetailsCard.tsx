import MCSQueueCollapseCard from "./MCSQueueCollapseCard";

interface Props {
  handler: () => void;
  data: any;
  sessionId: string;
}
function MCSQueueDetailsCard({ handler, data, sessionId }: Props) {
  console.log("DEBUG DATA:", data);
  return (
    <div className="bg-mediphix_card_background p-8 rounded-lg mt-4">
      <p className="font-bold text-mediphix_text_a">Queue Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Total Number of Patients in the queue
            </p>
            <p>{data.queue.appointments.length}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Completed Appointments
            </p>
            <p>{data.queue.queueOperations.finished.length}</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Absent Appointments
            </p>
            <p>{data.queue.queueOperations.absent.length}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Remaining Appointments
            </p>
            <p>
              {data.queue.appointments.length -
                data.queue.queueOperations.finished.length -
                data.queue.queueOperations.absent.length}
            </p>
          </div>
        </div>
      </div>
      <MCSQueueCollapseCard
        handler={handler}
        data={data}
        sessionId={sessionId}
      />
    </div>
  );
}

export default MCSQueueDetailsCard;
