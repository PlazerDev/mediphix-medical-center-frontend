import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";

type FieldType = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  dob: string;
  nic: string;
  email: string;
  address: string;
  nationality: string;
};

const { Option } = Select;

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function MCRPatientRegisterForm() {
  const [form] = Form.useForm<FieldType>();

  const clearForm = () => {
    form.resetFields();
  };

  return (
    <div className="bg-mediphix_card_background px-8 pt-6 rounded-lg">
      <Form
        className="w-full"
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex items-center justify-between gap-4">
          <Form.Item<FieldType>
            label="First Name"
            name="firstName"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Last Name"
            name="lastName"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Mobile Number"
            name="mobileNumber"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Form.Item<FieldType>
            label="Date of Birth"
            name="dob"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your date of birth!" },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item<FieldType>
            label="National Identity Card (NIC)"
            name="nic"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your NIC!" },
              {
                pattern: /^[0-9]{9}[Vv]$|^[0-9]{12}$/,
                message: "Please enter a valid NIC!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item<FieldType>
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <div className="flex items-center justify-between gap-4">
          <Form.Item<FieldType>
            label="Nationality"
            name="nationality"
            className="flex-1"
            rules={[
              { required: true, message: "Please select your nationality!" },
            ]}
          >
            <Select placeholder="Select your nationality">
              <Option value="Sri Lankan">Sri Lankan</Option>
              <Option value="Indian">Indian</Option>
              <Option value="Maldivian">Maldivian</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Form.Item label={null}>
            <Button type="default" onClick={clearForm} className="mr-4">
              Clear Form
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default MCRPatientRegisterForm;
