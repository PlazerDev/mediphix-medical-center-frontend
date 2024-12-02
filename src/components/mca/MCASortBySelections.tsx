import { Select } from "antd"; // Make sure you have `antd` installed

function MCASortBySelections() {
  return (
    <Select
      size="large"
      className="mt-2 w-[250px]"
      placeholder="Sort By"
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        { value: "newest", label: "Newest to Oldest" },
        { value: "oldest", label: "Oldest to Newest" },
        { value: "most_centers", label: "Most Medical Centers to Least" },
        { value: "least_centers", label: "Least Medical Centers to Most" },
      ]}
    />
  );
}

export default MCASortBySelections;
