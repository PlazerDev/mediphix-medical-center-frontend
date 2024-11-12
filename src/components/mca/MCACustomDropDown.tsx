import { Select } from "antd";

interface Props {
  titlePlaceHolder: string;
  dataList: appointmentOptions[];
}

type appointmentOptions = {
  value: string;
  label: string;
};

function MCACustomDropDown({ titlePlaceHolder, dataList }: Props) {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <div>
      <Select
        showSearch
        allowClear={true}
        size="large"
        className="w-64"
        placeholder={titlePlaceHolder}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={dataList}
      />
    </div>
  );
}

export default MCACustomDropDown;
