import MCSQueueFinishedSessions from "./MCSQueueFinishedSessions";
import MCSQueueOngoingSessions from "./MCSQueueOngoingSessions";
import MCSQueueNext from "./MCSQueueNext";
import MCSQueueCurrentQueue from "./MCSQueueCurrentQueue";
import MCSQueueAbsent from "./MCSQueueAbsent";

interface Props {
  handler: () => void;
  data: any;
  sessionId: string;
}

function MCSQueueCollapseCard({ handler, data, sessionId }: Props) {
  return (
    <>
      <MCSQueueFinishedSessions handler={handler} data={data} />
      <MCSQueueOngoingSessions
        handler={handler}
        data={data}
        sessionId={sessionId}
      />
      <MCSQueueNext handler={handler} data={data} />
      <MCSQueueCurrentQueue handler={handler} data={data} />
      <MCSQueueAbsent handler={handler} data={data} />
    </>
  );
}

export default MCSQueueCollapseCard;
