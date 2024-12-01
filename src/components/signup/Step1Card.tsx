import { Controller, useForm } from "react-hook-form";
import { Button, Input, Select } from "antd";
import { UserData } from "./SignUpCardBody";

const { Option } = Select;

interface Props {
  nextBtnHandler: (data: Partial<UserData>) => void; // Updated prop type
}

function Step1Card({ nextBtnHandler }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {},
  });

  const onSubmit = (data: UserData) => {
    nextBtnHandler(data);
  };

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

  return (
    <div className="pt-4">
      <p className="text-mediphix_text_c">
        Fill your information and press continue
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-4"
      >
        <div>
          <p>Name of the medical center</p>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                className="h-12"
                placeholder="Enter the medical center name here"
                {...field}
              />
            )}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <p>Address</p>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <Input
                  className="h-12"
                  placeholder="Enter your address here"
                  {...field}
                />
              )}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <p>District</p>
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <Select
                  className="w-full h-12"
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
          </div>

          <div className="flex-1">
            <p>Mobile Number</p>
            <Controller
              name="mobileNumber"
              control={control}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number format",
                },
              }}
              render={({ field }) => (
                <Input
                  className="h-12"
                  placeholder="Enter Mobile Number"
                  {...field}
                />
              )}
            />
            {errors.mobileNumber && (
              <span className="text-red-500">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-end my-4">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-mediphix_accent hover:bg-[#ff841f] px-4 py-2 text-mediphix_card_background rounded-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Step1Card;
