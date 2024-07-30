import { Collapse, CollapseProps } from "antd";

function FAQ() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-semibold">
          How does the appointment management system work?
        </p>
      ),
      children:
        "Our appointment management system allows you to easily book, reschedule, and manage patient appointments, ensuring no double bookings and minimal patient wait times.",
    },
    {
      key: "2",
      label: (
        <p className="font-semibold">
          Can staff members access patient records?
        </p>
      ),
      children:
        "Yes, authorized staff members can access patient records to provide personalized care and ensure seamless patient experiences.",
    },
    {
      key: "3",
      label: (
        <p className="font-semibold">
          What features are available for queue management?
        </p>
      ),
      children:
        "Our queue management system includes real-time tracking of patient flow, automated notifications for patients, and efficient allocation of resources to minimize wait times.",
    },
  ];
  return (
    <div>
      <p className="text-center font-bold text-3xl mb-8">
        Frequently asked questions
      </p>
      <div>
        <Collapse
          style={{ backgroundColor: "transparent" }}
          items={items}
          bordered={false}
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
}

export default FAQ;
