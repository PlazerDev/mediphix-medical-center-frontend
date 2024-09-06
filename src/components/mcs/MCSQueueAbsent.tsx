import { Collapse, CollapseProps, Divider } from "antd";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";

interface Props {
  handler: () => void;
}
function MCSQueueAbsent({ handler }: Props) {
  let absentQueue: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 09 | REF_A0077"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={true}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={true}
          isMoveToAbsentActive={false}
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
          title={"NO 10 | REF_A0088"}
          isPaymentDone={false}
          isActive={false}
          isFinished={false}
          isNext={[false, 0]}
          isAbsent={true}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={false}
          isUndoActive={true}
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
        Absent Queue
      </Divider>
      {/* When there is no absent sessions */}
      {/* <MCSQueueStatusAlert title="Currently, there are no absent sessions." /> */}
      {/* When there is absent queue */}
      <Collapse
        className="mt-4"
        accordion
        items={absentQueue}
        defaultActiveKey={["1"]}
        onChange={() => {}}
      />
    </div>
  );
}

export default MCSQueueAbsent;
