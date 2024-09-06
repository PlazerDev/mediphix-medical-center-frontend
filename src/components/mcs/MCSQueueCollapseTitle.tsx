import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

interface Props {
  title: string;
  isPaymentDone: boolean;
  isFinished: boolean;
  isNext: [boolean, number];
  isActive: boolean;
  isAbsent: boolean;
}

function MCSQueueCollapseTitle({
  title,
  isPaymentDone,
  isFinished,
  isNext,
  isActive,
  isAbsent,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 ">
      <p className="font-medium">{title}</p>
      <div>
        {isFinished && (
          <Tag icon={<CheckCircleOutlined />} color="success">
            Finished
          </Tag>
        )}
        {isAbsent && (
          <Tag icon={<UserDeleteOutlined />} color="default">
            Absent
          </Tag>
        )}
        {!isPaymentDone && (
          <Tag icon={<CloseCircleOutlined />} color="error">
            Payment Not Done
          </Tag>
        )}
        {isActive && (
          <Tag icon={<SyncOutlined spin />} color="processing">
            On Going
          </Tag>
        )}
        {isNext[0] && (
          <Tag icon={<ExclamationCircleOutlined />} color="geekblue">
            Next Patient {isNext[1]}
          </Tag>
        )}
      </div>
    </div>
  );
}

export default MCSQueueCollapseTitle;
