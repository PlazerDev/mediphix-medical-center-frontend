import { Collapse, CollapseProps, Divider, theme } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";

interface Props {
  handler: () => void;
}
function MCSQueueNext({ handler }: Props) {
  const { token } = theme.useToken();
  function panelStyle() {
    let panelStyleFinished: React.CSSProperties;
    panelStyleFinished = {
      background: "#ededed",
      border: "1px solid #a3a3a3",
      borderRadius: token.borderRadiusLG,
      marginBottom: "8px",
    };
    return panelStyleFinished;
  }
  let nextSession: CollapseProps["items"] = [
    {
      key: "4",
      style: panelStyle(),
      label: (
        <MCSQueueCollapseTitle
          title={"NO 04 | REF_A061"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[true, 1]}
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
          isSetNext1Active={false}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    },
    {
      key: "5",
      style: panelStyle(),
      label: (
        <MCSQueueCollapseTitle
          title={"NO 05 | REF_A091"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[true, 2]}
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
        Next Sessions
      </Divider>
      {/* When there is no next sessions */}
      <Collapse
        className="mt-4"
        accordion
        bordered={false}
        items={nextSession}
        defaultActiveKey={["1"]}
        onChange={() => {}}
      />
      {/* When there is next sessions */}
      {/* <MCSQueueStatusAlert title="Currently, No sessions has been set as next." /> */}
    </div>
  );
}

export default MCSQueueNext;
