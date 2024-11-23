import React, { useState } from "react";
import ReportBacklogTitle from "./MCLSReportBacklogTitle";
import { LabReportsService } from "../../services/mcls/LabReportsService";
import MCLSReportSearch from "./MCLSReportSearch";
import MCLSReportSort from "./MCLSReportSort";
import CardTitleAndValue from "../CardTitleAndValue";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Drawer, Pagination, Tag } from "antd";
import MCLSReport3rdDrawerContent from "./MCLSReport3rdDrawerContent";

interface OpenedReportDataRecord {
  id: string;
  refNumber: string;
}

function MCLSReport3rdCol() {
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
        <ReportBacklogTitle count={4} style={3} title="Done" />
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
                    title="Test Ended Date"
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
              <div className="flex items-center justify-between">
                <CardTitleAndValue title={"Test Type"} value={item.testTypes} />
                <Tag icon={<CheckCircleOutlined />} color="success">
                  Completed
                </Tag>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination align="end" defaultCurrent={1} total={50} className="mt-4" />
      <Drawer
        title={"Done - " + openedReportData.refNumber}
        onClose={onClose}
        open={open}
        size="large"
      >
        <MCLSReport3rdDrawerContent id={openedReportData.id} />
      </Drawer>
    </div>
  );
}

export default MCLSReport3rdCol;
