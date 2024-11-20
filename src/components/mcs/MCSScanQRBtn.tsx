import { QrcodeOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  handler: () => void;
}
function MCSScanQRBtn({ handler }: Props) {
  return (
    <Button type="primary" icon={<QrcodeOutlined />} onClick={handler}>
      Scan QR
    </Button>
  );
}

export default MCSScanQRBtn;
