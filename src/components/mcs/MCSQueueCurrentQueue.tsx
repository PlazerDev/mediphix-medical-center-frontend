import type { CollapseProps } from "antd";
import { Collapse, Divider } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";

interface Props {
  handler: () => void;
}
function MCSQueueCurrentQueue({ handler }: Props) {
  let currentQueue: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 06 | REF_A0077"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={true}
          isUndoActive={false}
          isSetNext1Active={true}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    },
    {
      key: "2",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 07 | REF_A0088"}
          isPaymentDone={false}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={true}
          isUndoActive={false}
          isSetNext1Active={true}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    },
    {
      key: "3",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 08 | REF_A0099"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={true}
          isUndoActive={false}
          isSetNext1Active={true}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    },
  ];
  return (
    <div className="mt-8">
      <Divider
        style={{ borderColor: "#DCDCDC", color: "#FF7300" }}
        orientation="left"
      >
        Current Queue
      </Divider>
      {/* When there is current queue */}
      <Collapse
        className="mt-4"
        accordion
        items={currentQueue}
        defaultActiveKey={["1"]}
        onChange={() => {}}
      />
      {/* When there is no queue */}
      {/* <MCSQueueStatusAlert title="Currently, there are no one in the queue." /> */}
    </div>
  );
}

export default MCSQueueCurrentQueue;
