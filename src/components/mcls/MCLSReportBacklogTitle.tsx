interface Props {
  title: string;
  count: number;
  style: number;
}

function ReportBacklogTitle({ title, count, style }: Props) {
  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
    </div>
  );
}

export default ReportBacklogTitle;
