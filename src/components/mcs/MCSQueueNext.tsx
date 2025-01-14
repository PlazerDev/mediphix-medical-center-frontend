import { Collapse, CollapseProps, Divider, theme } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";
import MCSQueueStatusAlert from "./MCSQueueStatusAlert";

interface Props {
  handler: () => void;
  data: any;
}
function MCSQueueNext({ handler, data }: Props) {
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
  let nextSession: CollapseProps["items"] = [];

  if (
    data.queue.queueOperations.nextPatient1 == -1 ||
    data.queue.appointments[data.queue.queueOperations.nextPatient1 - 1] ==
      undefined
  ) {
    // all are empty
  } else {
    nextSession.push({
      key: "1",
      style: panelStyle(),
      label: (
        <MCSQueueCollapseTitle
          title={`Queue Number ${
            data.queue.queueOperations.nextPatient1
          } | Appointment Number ${
            data.queue.appointments[data.queue.queueOperations.nextPatient1 - 1]
          }`}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={[true, 1]}
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
          isSetNext1Active={false}
          isSetNext2Active={true}
          isSetDefaultActive={false}
          handler={handler}
        />
      ),
    });

    if (
      data.queue.queueOperations.nextPatient2 == -1 ||
      data.queue.appointments[data.queue.queueOperations.nextPatient2 - 1] ==
        undefined
    ) {
    } else {
      nextSession.push({
        key: "1",
        style: panelStyle(),
        label: (
          <MCSQueueCollapseTitle
            title={`Queue Number ${
              data.queue.queueOperations.nextPatient2
            } | Appointment Number ${
              data.queue.appointments[
                data.queue.queueOperations.nextPatient2 - 1
              ]
            }`}
            isPaymentDone={true}
            isActive={false}
            isFinished={false}
            isNext={[true, 1]}
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
            isSetNext1Active={false}
            isSetNext2Active={true}
            isSetDefaultActive={false}
            handler={handler}
          />
        ),
      });
    }
  }
  return (
    <div className="mt-8">
      <Divider
        style={{ borderColor: "#DCDCDC", color: "#FF7300" }}
        orientation="left"
      >
        Next Sessions
      </Divider>

      {/* When there is no next sessions */}
      {nextSession.length != 0 && (
        <Collapse
          className="mt-4"
          accordion
          bordered={false}
          items={nextSession}
          defaultActiveKey={["1"]}
          onChange={() => {}}
        />
      )}

      {/* When there is next sessions */}
      {nextSession.length == 1 && (
        <MCSQueueStatusAlert title="Currently, No sessions has been set as next 2." />
      )}
      {nextSession.length == 0 && (
        <>
          <MCSQueueStatusAlert title="Currently, No sessions has been set as next 2." />
          <MCSQueueStatusAlert title="Currently, No sessions has been set as next 2." />
        </>
      )}
    </div>
  );
}

export default MCSQueueNext;
