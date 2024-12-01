import type { FormProps } from "antd";
import { Button, Form, Input, Select, notification } from "antd";

import { ResopnseDataService } from "../../services/mcr/ResopnseDataService";
import {
  PatientRegistrationDataRecord,
  PatientService,
} from "../../services/mcr/PatientService";

const { Option } = Select;

const onFinish = async (values: PatientRegistrationDataRecord) => {
  try {
    const response = await PatientService.registerPatient(values);
    ResopnseDataService.showSuccessAlert("Patient has been registered!");
    console.log("Response:", response);
  } catch (error) {
    ResopnseDataService.showErrorAlert("Patient registration unsuccessful!");
    console.error("Error:", error);
  }
};

const onFinishFailed: FormProps<PatientRegistrationDataRecord>["onFinishFailed"] =
  (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

function MCRPatientRegisterForm() {
  const [form] = Form.useForm<PatientRegistrationDataRecord>();

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
          <Form.Item<PatientRegistrationDataRecord>
            label="First Name"
            name="fname"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<PatientRegistrationDataRecord>
            label="Last Name"
            name="lname"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<PatientRegistrationDataRecord>
            label="Mobile Number"
            name="mobile"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              {
                pattern: /^[0-9]{9}$/,
                message: "Please enter a valid 9-digit number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Form.Item<PatientRegistrationDataRecord>
            label="Date of Birth"
            name="dob"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your date of birth!" },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item<PatientRegistrationDataRecord>
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
          <Form.Item<PatientRegistrationDataRecord>
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

        <div className="flex items-center justify-between gap-4">
          <Form.Item<PatientRegistrationDataRecord>
            label="Password"
            name="password"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 8,
                message: "Password must be at least 8 characters long!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<PatientRegistrationDataRecord>
            label="Confirm Password"
            name="confirmPassword"
            className="flex-1"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className="flex-1"></div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Form.Item<PatientRegistrationDataRecord>
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
          <Form.Item<PatientRegistrationDataRecord>
            label="Gender"
            name="gender"
            className="flex-1"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Select placeholder="Select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <div className="flex-1"></div>
        </div>

        <Form.Item<PatientRegistrationDataRecord>
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

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
