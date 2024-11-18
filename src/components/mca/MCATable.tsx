import React from "react";
import { Table, Tag } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  openedDate: string;
  aptCategory: JSX.Element;
  status: string;
  noOfResponses: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Opened Date",
    dataIndex: "openedDate",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      new Date(a.openedDate).getTime() - new Date(b.openedDate).getTime(),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Appointment Categories",
    dataIndex: "aptCategory",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "OPEN",
        value: "OPEN",
      },
      {
        text: "CLOSED",
        value: "CLOSED",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value as string) === 0,
  },
  {
    title: "Number of Responses",
    dataIndex: "noOfResponses",
    sorter: (a, b) => a.noOfResponses - b.noOfResponses,
    sortDirections: ["descend", "ascend"],
  },
];

const data = [
  {
    key: "1",
    openedDate: "2024/06/13",
    aptCategory: (
      <>
        <Tag color="default">OPD</Tag>
      </>
    ),
    status: "OPEN",
    noOfResponses: 6,
  },
  {
    key: "2",
    openedDate: "2024/05/13",
    aptCategory: (
      <>
        <Tag color="default">Mental Health</Tag>
      </>
    ),
    status: "CLOSED",
    noOfResponses: 8,
  },
  {
    key: "3",
    openedDate: "2024/06/13",
    aptCategory: (
      <>
        <Tag color="default">OPD</Tag>
        <Tag color="default">Heart Health</Tag>
      </>
    ),
    status: "OPEN",
    noOfResponses: 10,
  },
  {
    key: "4",
    openedDate: "2024/04/13",
    aptCategory: (
      <>
        <Tag color="default">Neurology </Tag>
      </>
    ),
    status: "CLOSED",
    noOfResponses: 0,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

function MCATable() {
  return (
    <Table<DataType>
      className="w-full"
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
}

export default MCATable;
