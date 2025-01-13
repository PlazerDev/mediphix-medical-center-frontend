import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Input,
  Select,
  Form,
  Upload,
  UploadProps,
  message,
} from "antd";
import { CenterData } from "./SignUpCardBody";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

interface Props {
  nextBtnHandler: (data: CenterData) => void; // Updated prop type
  backBtnHandler: () => void;
  initialData: CenterData;
}

function Step1Card({ nextBtnHandler, backBtnHandler, initialData }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CenterData>({
    defaultValues: initialData,
  });
  const email = watch("email");

  const districts = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
  ];

  const onSubmit = (data: CenterData) => {
    console.log("Form Submitted with Data:", data);
    nextBtnHandler(data);
  };

  const propLogo: UploadProps = {
    name: "file",
    action: `http://localhost:9000/media/upload?email=${email}&userType=medicalCenter&uploadType=logo`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
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

  const propLicense: UploadProps = {
    name: "file",
    action: `http://localhost:9000/media/upload?email=${email}&userType=medicalCenter&uploadType=license`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
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
    <div className="pt-4">
      <p className="text-mediphix_text_c">
        Fill medical center information and press next
      </p>
      <Form
        onFinish={handleSubmit(onSubmit)}
        requiredMark={false}
        layout="vertical"
        className="mt-4 flex flex-col gap-0"
      >
        <Form.Item label="Name of the Medical Center" required>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                placeholder="Enter the medical center name here"
                {...field}
              />
            )}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </Form.Item>

        <div className="flex justify-between items-center gap-4">
          <Form.Item label="Address" required className="flex-1">
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <Input placeholder="Enter your address here" {...field} />
              )}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </Form.Item>

          <Form.Item label="District" required className="flex-1">
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <Select
                  placeholder="Select a district"
                  {...field}
                  onChange={(value) => field.onChange(value)}
                >
                  {districts.map((district) => (
                    <Option key={district} value={district}>
                      {district}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.district && (
              <span className="text-red-500">{errors.district.message}</span>
            )}
          </Form.Item>
        </div>

        <div className="flex justify-between items-center gap-4">
          <Form.Item label="Email" required className="flex-1">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <Input placeholder="Enter center's email here" {...field} />
              )}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </Form.Item>

          <Form.Item label="Mobile Number" required className="flex-1">
            <Controller
              name="mobile"
              control={control}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number format",
                },
              }}
              render={({ field }) => (
                <Input placeholder="Enter mobile number here" {...field} />
              )}
            />
            {errors.mobile && (
              <span className="text-red-500">{errors.mobile.message}</span>
            )}
          </Form.Item>
        </div>

        <Form.Item label="Description" required>
          <Controller
            name="specialNotes"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <Input.TextArea placeholder="Describe your center" {...field} />
            )}
          />
          {errors.specialNotes && (
            <span className="text-red-500">{errors.specialNotes.message}</span>
          )}
        </Form.Item>

        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            <p className="mb-2">Center Logo</p>
            <Upload {...propLogo}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <div className="flex-1">
            <div className="flex gap-4">
              <p className="mb-2">Center Regestration Document</p>
              <a
                href="https://drive.google.com/uc?export=download&id=18vtlgJ7P7NHJEtFxX8yepWckOuC7CHeG"
                download="your-file-name.pdf"
                className="text-mediphix_accent"
              >
                Download PDF
              </a>
            </div>
            <Upload {...propLicense}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </div>

        <div className="flex justify-end my-4 gap-2">
          <Button
            onClick={backBtnHandler}
            className="px-4 py-2 rounded-lg"
            disabled
          >
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

export default Step1Card;
