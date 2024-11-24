interface Props {
  title: string;
  count: number;
  style: 1 | 2 | 3;
}

function ReportBacklogTitle({ title, count, style }: Props) {
  const styleData: Record<1 | 2 | 3, string> = {
    1: "bg-red-200 text-red-500 px-4 py-2 rounded-md",
    2: "bg-blue-200 text-blue-500 px-4 py-2 rounded-md",
    3: "bg-green-200 text-green-500 px-4 py-2 rounded-md",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={styleData[style]}>{title}</div>
      <div className={styleData[style]}>{count}</div>
    </div>
  );
}

export default ReportBacklogTitle;
