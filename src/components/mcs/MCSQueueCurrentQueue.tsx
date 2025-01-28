import type { CollapseProps } from "antd";
import { Collapse, Divider } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueStatusAlert from "./MCSQueueStatusAlert";

interface Props {
  handler: () => void;
  data: any;
}
function MCSQueueCurrentQueue({ handler, data }: Props) {
  const apts: number[] = data.queue.appointments;
  const currentQ: number[] = [];

  apts.forEach((q, index) => {
    // 'index' is now accessible in each iteration
    if (
      data.queue.queueOperations.ongoing === index + 1 ||
      data.queue.queueOperations.finished.includes(index + 1) ||
      data.queue.queueOperations.absent.includes(index + 1) ||
      data.queue.queueOperations.nextPatient1 === index + 1 ||
      data.queue.queueOperations.nextPatient2 === index + 1
    ) {
      // Nothing needed inside here for now, or you can add some logic if necessary
    } else {
      currentQ.push(index + 1); // Push the index into currentQ
    }
  });

  let currentQueue: CollapseProps["items"] = currentQ.map(
    (q, index: number) => ({
      key: index,
      label: (
        <MCSQueueCollapseTitle
          title={`Queue Number ${q} | Appointment Number ${
            data.queue.appointments[q - 1]
          }`}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName=""
          age=""
          isEndToQueueActive={false}
          isMoveToAbsentActive={true}
          isUndoActive={false}
          isSetNext1Active={true}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    })
  );

  // ];
  return (
    <div className="mt-8">
      <Divider
        style={{ borderColor: "#DCDCDC", color: "#FF7300" }}
        orientation="left"
      >
        Current Queue
      </Divider>
      {/* When there is current queue */}
      {currentQueue.length != 0 && (
        <Collapse
          className="mt-4"
          accordion
          items={currentQueue}
          defaultActiveKey={["1"]}
          onChange={() => {}}
        />
      )}

      {/* When there is no queue */}
      {currentQueue.length == 0 && (
        <MCSQueueStatusAlert title="Currently, there are no one in the queue." />
      )}
    </div>
  );
}

export default MCSQueueCurrentQueue;
