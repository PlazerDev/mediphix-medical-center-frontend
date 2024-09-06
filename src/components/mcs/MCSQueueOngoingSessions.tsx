import type { CollapseProps } from "antd";
import { Collapse, Divider, theme } from "antd";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";

interface Props {
  handler: () => void;
}

function MCSQueueOngoingSessions({ handler }: Props) {
  const { token } = theme.useToken();

  function panelStyle() {
    let panelStyleFinished: React.CSSProperties;
    panelStyleFinished = {
      background: "#ffe7d4",
      border: "1px solid #FF7300",
      borderRadius: token.borderRadiusLG,
      marginBottom: "0px",
    };
    return panelStyleFinished;
  }

  let ongoingSession: CollapseProps["items"] = [
    {
      key: "3",
      style: panelStyle(),
      label: (
        <MCSQueueCollapseTitle
          title={"NO 03 | REF_A0561"}
          isPaymentDone={true}
          isActive={true}
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
        Ongoing Session
      </Divider>
      {/* When there is ongoing sessions */}
      <Collapse
        className="mt-4"
        accordion
        items={ongoingSession}
        defaultActiveKey={["1"]}
        onChange={() => {}}
      />
      {/* When there is no ongoing sessions */}
      {/* <MCSQueueStatusAlert
    title="Currently, there are no ongoing sessions."
    isOngoing={true}
  /> */}
    </div>
  );
}

export default MCSQueueOngoingSessions;
