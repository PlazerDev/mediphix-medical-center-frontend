import MCSQueueFinishedSessions from "./MCSQueueFinishedSessions";
import MCSQueueOngoingSessions from "./MCSQueueOngoingSessions";
import MCSQueueNext from "./MCSQueueNext";
import MCSQueueCurrentQueue from "./MCSQueueCurrentQueue";
import MCSQueueAbsent from "./MCSQueueAbsent";

interface Props {
  handler: () => void;
}

function MCSQueueCollapseCard({ handler }: Props) {
  return (
    <>
      <MCSQueueFinishedSessions handler={handler} />
      <MCSQueueOngoingSessions handler={handler} />
      <MCSQueueNext handler={handler} />
      <MCSQueueCurrentQueue handler={handler} />
      <MCSQueueAbsent handler={handler} />
    </>
  );
}

export default MCSQueueCollapseCard;
