import { useEffect, useState } from "react";
import { Form, Input, Button, Upload, UploadProps, message } from "antd";
import { AdminData } from "./SignUpCardBody";
import { UploadOutlined } from "@ant-design/icons";

interface Props {
  nextBtnHandler: (data: AdminData) => void;
  backBtnHandler: () => void;
  initialData: AdminData;
}

function Step2Card({ nextBtnHandler, backBtnHandler, initialData }: Props) {
  const [form] = Form.useForm();
  const [email, setEmail] = useState<string>(initialData.email);

  // Set the initial values of the form
  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [initialData, form]);

  const onFinish = (values: AdminData) => {
    nextBtnHandler(values);
  };

  const prop: UploadProps = {
    name: "file",
    action: `http://localhost:9000/media/upload?email=${email}&userType=mca&uploadType=profileImage`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(email);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="py-4">
      <p className="text-mediphix_text_c">
        Enter your admin details to proceed.
      </p>
      <Form
        requiredMark={false}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="mt-4 flex flex-col"
        onValuesChange={(changedValues) => {
          if (changedValues.email) {
            setEmail(changedValues.email);
          }
        }}
      >
        <div className="flex justify-between items-center gap-4">
          {/* Name Field */}
          <Form.Item
            className="flex-1"
            name="name"
            label="Name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          {/* NIC Field */}
          <Form.Item
            className="flex-1"
            name="nic"
            label="NIC"
            rules={[{ required: true, message: "NIC is required" }]}
          >
            <Input placeholder="Enter your NIC" />
          </Form.Item>
        </div>

        {/* Mobile Number Field */}
        <div className="flex justify-between items-center gap-4">
          <Form.Item
            className="flex-1"
            name="mobile"
            label="Mobile Number"
            rules={[
              { required: true, message: "Mobile number is required" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Invalid mobile number format",
              },
            ]}
          >
            <Input placeholder="Enter your mobile number" />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            className="flex-1"
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Email is required" },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </div>
        <div className="flex justify-between items-center gap-4">
          {/* Password Field */}
          <Form.Item
            className="flex-1"
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            className="flex-1"
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
        </div>
        <div className="">
          <p className="mb-2">Profile Image</p>
          <Upload {...prop}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
        {/* Buttons */}
        <div className="flex justify-end my-4 gap-2">
          <Button onClick={backBtnHandler} className="px-4 py-2 rounded-lg">
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-mediphix_accent hover:bg-[#ff841f] px-4 py-2 text-mediphix_card_background rounded-lg"
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Step2Card;
