import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";

interface BreadcrumbItem {
  title: string;
  link: string;
}

interface Props {
  titleMemberName: string;
  title: string;
  breadcrumb: BreadcrumbItem[];
}

function MCSGreeting({ titleMemberName, title, breadcrumb }: Props) {
  const items = breadcrumb.map((item) => {
    return {
      title: item.link ? <a href={item.link}>{item.title}</a> : item.title,
    };
  });

  return (
    <div className="inline-flex flex-col">
      <p className="text-lg font-bold">
        {titleMemberName ? title + ", " + titleMemberName : title}
      </p>
      <p>{<Breadcrumb items={items} />}</p>
    </div>
  );
}

export default MCSGreeting;
