import {
  ExclamationCircleOutlined,
  FileAddOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import ReportBacklogTitle from "./MCLSReportBacklogTitle";
import { Button, Drawer, Pagination, Tag, Tooltip } from "antd";
import MCLSReportSearch from "./MCLSReportSearch";
import MCLSReportSort from "./MCLSReportSort";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import CardTitleAndValue from "../CardTitleAndValue";
import { useState } from "react";
import MCLSReport1stDrawerContent from "./MCLSReport1stDrawerContent";

interface OpenedReportDataRecord {
  id: string;
  refNumber: string;
}

function MCLSReport1stCol() {
  const [open, setOpen] = useState(false);
  const [openedReportData, setOpenedReportData] =
    useState<OpenedReportDataRecord>({
      id: "",
      refNumber: "",
    });

  const onClose = () => {
    setOpen(false);
  };
  const reportBacklogData = LabReportsService.getSampleReportBacklogData();

  function reportBacklogCardHandler(id: string, referenceNumber: string) {
    setOpenedReportData({ id, refNumber: referenceNumber });
    setOpen(true);
  }

  return (
    <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
      <div className="flex items-center justify-between">
        <ReportBacklogTitle count={4} style={1} title="Report Backlog" />
        <Tooltip title="Add a report to backlog">
          <Button type="primary" shape="circle" icon={<FileAddOutlined />} />
        </Tooltip>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <MCLSReportSearch />
        <MCLSReportSort />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {reportBacklogData.map((item) => {
          return (
            <div
              onClick={() => {
                reportBacklogCardHandler(item.id, item.referenceNumber);
              }}
              className="flex flex-col gap-1 border p-2 rounded-lg hover:bg-mediphix_text_d hover:cursor-pointer"
            >
              <div className="flex items-start justify-between h-11">
                <div className="flex flex-1 flex-row items-center justify-between">
                  <CardTitleAndValue
                    title="Reference Number"
                    value={item.referenceNumber}
                  />
                  <CardTitleAndValue
                    title="Date Added"
                    value={item.dateAdded}
                  />
                </div>
                <div className="w-32 h-full flex items-center justify-end">
                  {item.isUrgent && (
                    <Tag
                      icon={<ExclamationCircleOutlined />}
                      color="error"
                      className="flex justify-center"
                    >
                      URGENT
                    </Tag>
                  )}
                </div>
              </div>
              <div>
                <CardTitleAndValue title={"Test Type"} value={item.testTypes} />
              </div>
            </div>
          );
        })}
      </div>
      <Pagination align="end" defaultCurrent={1} total={50} className="mt-4" />
      <Drawer
        title={"Report Backlog - " + openedReportData.refNumber}
        onClose={onClose}
        open={open}
        size="large"
      >
        <MCLSReport1stDrawerContent id={openedReportData.id} />
      </Drawer>
    </div>
  );
}

export default MCLSReport1stCol;
