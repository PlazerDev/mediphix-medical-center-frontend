import { Collapse, Divider } from "antd";
import type { CollapseProps } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";

interface Props {
  handler: () => void;
}

function MCSQueueFinishedSessions({ handler }: Props) {
  let finishedSessions: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 01 | REF_A0021"}
          isPaymentDone={true}
          isActive={false}
          isFinished={true}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={false}
          isUndoActive={false}
          isSetNext1Active={false}
          isSetNext2Active={false}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    },
    {
      key: "2",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 02 | REF_A0041"}
          isPaymentDone={true}
          isActive={false}
          isFinished={true}
          isNext={[false, 0]}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isEndToQueueActive={false}
          isMoveToAbsentActive={false}
          isUndoActive={false}
          isSetNext1Active={false}
          isSetNext2Active={false}
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
        Finished Sessions
      </Divider>
      {/* When there is no finished sessions */}
      {/* <MCSQueueStatusAlert title="Currently, there are no finished sessions." /> */}
      {/* When there is finished sessions */}
      <Collapse
        className="mt-4"
        accordion
        items={finishedSessions}
        defaultActiveKey={["1"]}
        onChange={() => {}}
      />
    </div>
  );
}

export default MCSQueueFinishedSessions;
