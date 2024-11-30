import { useState } from "react";
import { Button, Form, Input, DatePicker, Select } from "antd";

type Props = {
  onFinish: (values: any) => void;
};

function MCRCreateAppointmentSearching({ onFinish }: Props) {
  const [form] = Form.useForm();
  const [isSearchDisabled, setIsSearchDisabled] = useState(true);

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    const isAtLeastOneFieldFilled =
      values.date ||
      values.doctorName ||
      (values.category && values.category.length > 0);
    setIsSearchDisabled(!isAtLeastOneFieldFilled);
  };

  return (
    <div className="w-full p-8 bg-mediphix_card_background rounded-lg">
      <Form
        form={form}
        name="appointmentSearch"
        layout="vertical"
        onValuesChange={handleFormChange}
        onFinish={onFinish}
        autoComplete="off"
        className=""
      >
        <div className="flex items-center justify-between gap-4">
          <Form.Item label="Date" name="date" className="flex-1">
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item label="Doctor Name" name="doctorName" className="flex-1">
            <Input placeholder="Enter doctor name" />
          </Form.Item>
          <Form.Item
            label="Appointment Category"
            name="category"
            className="flex-1"
          >
            <Select
              mode="multiple"
              placeholder="Select appointment category"
              allowClear
              options={[
                {
                  value: "General Consultation",
                  label: "General Consultation",
                },
                { value: "Specialist Visit", label: "Specialist Visit" },
                { value: "Lab Test", label: "Lab Test" },
                { value: "Vaccination", label: "Vaccination" },
              ]}
            />
          </Form.Item>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button type="primary" htmlType="submit" disabled={isSearchDisabled}>
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default MCRCreateAppointmentSearching;
