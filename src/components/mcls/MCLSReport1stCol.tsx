import { FileAddOutlined } from "@ant-design/icons";
import ReportBacklogTitle from "./MCLSReportBacklogTitle";
import { Button, Tooltip } from "antd";

function MCLSReport1stCol() {
  return (
    <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
      <div className="flex items-center justify-between">
        <ReportBacklogTitle count={4} style={1} title="Report Backlog" />
        <Tooltip title="Add a report to backlog">
          <Button type="primary" shape="circle" icon={<FileAddOutlined />} />
        </Tooltip>
      </div>
    </div>
  );
}

export default MCLSReport1stCol;
