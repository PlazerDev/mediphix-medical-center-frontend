import type { CollapseProps } from "antd";
import { Collapse, Divider, theme } from "antd";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueStatusAlert from "./MCSQueueStatusAlert";

interface Props {
  handler: () => void;
  data: any;
  sessionId: string;
}

function MCSQueueOngoingSessions({ handler, data, sessionId }: Props) {
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

  let ongoingSession: CollapseProps["items"] = [];

  if (data.queue.queueOperations.ongoing != -1) {
    ongoingSession.push({
      key: "888",
      style: panelStyle(),
      label: (
        <MCSQueueCollapseTitle
          title={`Queue Number ${
            data.queue.queueOperations.ongoing
          } | Appointment Number ${
            data.queue.appointments[data.queue.queueOperations.ongoing - 1]
          }`}
          isPaymentDone={true}
          isActive={true}
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
          isMoveToAbsentActive={false}
          isUndoActive={false}
          isSetNext1Active={false}
          isSetNext2Active={false}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    });
  }

  return (
    <div className="mt-8">
      <Divider
        style={{ borderColor: "#DCDCDC", color: "#FF7300" }}
        orientation="left"
      >
        Ongoing Session
      </Divider>
      {/* When there is ongoing sessions */}
      {ongoingSession?.length != 0 && (
        <Collapse
          className="mt-4"
          accordion
          items={ongoingSession}
          defaultActiveKey={["1"]}
          onChange={() => {}}
        />
      )}

      {/* When there is no ongoing sessions */}
      {ongoingSession?.length == 0 && (
        <MCSQueueStatusAlert
          data={data}
          sessionId={sessionId}
          title="Currently, there are no ongoing sessions."
          isOngoing={true}
        />
      )}
    </div>
  );
}

export default MCSQueueOngoingSessions;
