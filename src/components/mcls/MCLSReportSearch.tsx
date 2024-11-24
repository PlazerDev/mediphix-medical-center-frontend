import { Input, Space } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

function MCLSReportSearch() {
  return (
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  );
}

export default MCLSReportSearch;
