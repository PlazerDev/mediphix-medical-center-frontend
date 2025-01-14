import { Collapse, CollapseProps, Divider } from "antd";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueStatusAlert from "./MCSQueueStatusAlert";

interface Props {
  handler: () => void;
  data: any;
}
function MCSQueueAbsent({ handler, data }: Props) {
  let absentQueue: CollapseProps["items"] =
    data.queue.queueOperations.absent.map((q: any, index: number) => {
      return {
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
            isAbsent={true}
          />
        ),
        children: (
          <MCSQueueCollapseDesc
            patientName=""
            age=""
            isEndToQueueActive={true}
            isMoveToAbsentActive={false}
            isUndoActive={false}
            isSetNext1Active={true}
            isSetNext2Active={true}
            isSetDefaultActive={false}
            handler={handler}
          />
        ),
      };
    });

  return (
    <div className="mt-8">
      <Divider
        style={{ borderColor: "#DCDCDC", color: "#FF7300" }}
        orientation="left"
      >
        Absent Queue
      </Divider>
      {/* When there is no absent sessions */}
      {absentQueue?.length == 0 && (
        <MCSQueueStatusAlert title="Currently, there are no absent sessions." />
      )}

      {/* When there is absent queue */}

      {absentQueue?.length != 0 && (
        <Collapse
          className="mt-4"
          accordion
          items={absentQueue}
          defaultActiveKey={["1"]}
          onChange={() => {}}
        />
      )}
    </div>
  );
}

export default MCSQueueAbsent;
