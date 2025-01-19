import { Collapse, Divider } from "antd";
import type { CollapseProps } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueStatusAlert from "./MCSQueueStatusAlert";

interface Props {
  handler: () => void;
  data: any;
}

function MCSQueueFinishedSessions({ handler, data }: Props) {
  let finishedSessions: CollapseProps["items"] =
    data.queue.queueOperations.finished.map((q: any, index: number) => {
      return {
        key: index,
        label: (
          <MCSQueueCollapseTitle
            title={`Queue Number ${q} | Appointment Number ${
              data.queue.appointments[q - 1]
            }`}
            isPaymentDone={true}
            isActive={false}
            isFinished={true}
            isNext={[false, 0]}
            isAbsent={false}
          />
        ),
        children: (
          <MCSQueueCollapseDesc
            patientName=""
            age=""
            isEndToQueueActive={false}
            isMoveToAbsentActive={false}
            isUndoActive={false}
            isSetNext1Active={false}
            isSetNext2Active={false}
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
        Finished Sessions
      </Divider>
      {/* When there is no finished sessions */}
      {finishedSessions?.length == 0 && (
        <MCSQueueStatusAlert title="Currently, there are no finished sessions." />
      )}

      {/* When there is finished sessions */}
      {finishedSessions?.length != 0 && (
        <Collapse
          className="mt-4"
          accordion
          items={finishedSessions}
          defaultActiveKey={["1"]}
          onChange={() => {}}
        />
      )}
    </div>
  );
}

export default MCSQueueFinishedSessions;
