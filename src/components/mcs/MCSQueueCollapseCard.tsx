import MCSQueueFinishedSessions from "./MCSQueueFinishedSessions";
import MCSQueueOngoingSessions from "./MCSQueueOngoingSessions";
import MCSQueueNext from "./MCSQueueNext";
import MCSQueueCurrentQueue from "./MCSQueueCurrentQueue";
import MCSQueueAbsent from "./MCSQueueAbsent";

interface Props {
  handler: () => void;
  data: any;
}

function MCSQueueCollapseCard({ handler, data }: Props) {
  return (
    <>
      <MCSQueueFinishedSessions handler={handler} data={data} />
      <MCSQueueOngoingSessions handler={handler} data={data} />
      <MCSQueueNext handler={handler} data={data} />
      <MCSQueueCurrentQueue handler={handler} data={data} />
      <MCSQueueAbsent handler={handler} data={data} />
    </>
  );
}

export default MCSQueueCollapseCard;
