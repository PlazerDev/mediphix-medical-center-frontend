import { Select } from "antd";
import { LabReportsService } from "../../services/mcls/LabReportsService";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function MCLSReportSort() {
  const options = LabReportsService.getAllLabtestTypes();
  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      placeholder="Test Type"
      onChange={handleChange}
      options={options}
    />
  );
}

export default MCLSReportSort;
