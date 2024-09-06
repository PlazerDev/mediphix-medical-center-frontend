import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import MCSScanQRBtn from "./MCSScanQRBtn";
import MCSSelectedSessionBtn from "./MCSSelectedSessionBtn";
import { Divider } from "antd";

interface Props {
  patientName: string;
  age: string;
  isSetNext1Active: boolean;
  isSetNext2Active: boolean;
  isSetDefaultActive: boolean;
  isMoveToAbsentActive: boolean;
  isUndoActive: boolean;
  isEndToQueueActive: boolean;
  handler: () => void;
}

function MCSQueueCollapseDesc({
  patientName,
  age,
  isSetNext1Active,
  isSetNext2Active,
  isSetDefaultActive,
  isMoveToAbsentActive,
  isUndoActive,
  isEndToQueueActive,
  handler,
}: Props) {
  return (
    <div>
      <div className="flex mb-2">
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Patient Name</p>
          <p>{patientName}</p>
        </div>
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Age</p>
          <p>{age}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <MCSScanQRBtn handler={handler} />
        <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4 mt-2 md:mt-0">
          <MCSSelectedSessionBtn
            title="Move to Next 1"
            isDisabled={!isSetNext1Active}
            icon={ArrowUpOutlined}
          />
          <MCSSelectedSessionBtn
            title="Move to Next 2"
            isDisabled={!isSetNext2Active}
            icon={ArrowUpOutlined}
          />
          <MCSSelectedSessionBtn
            title="Set Default"
            isDisabled={!isSetDefaultActive}
            icon={ArrowDownOutlined}
          />
        </div>
        <Divider className="my-0 md:hidden"></Divider>
        <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4">
          <MCSSelectedSessionBtn
            title="Move to Absent"
            isDisabled={!isMoveToAbsentActive}
            icon={UserDeleteOutlined}
          />
          <MCSSelectedSessionBtn
            title="Undo"
            isDisabled={!isUndoActive}
            icon={UndoOutlined}
          />
          <MCSSelectedSessionBtn
            title="Add to End of Queue"
            isDisabled={!isEndToQueueActive}
            icon={UserAddOutlined}
          />
        </div>
      </div>
    </div>
  );
}

export default MCSQueueCollapseDesc;
