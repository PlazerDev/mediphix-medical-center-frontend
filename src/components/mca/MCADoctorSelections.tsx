import { Select } from "antd";

function MCADoctorSelections() {
  return (
    <Select
      size="large"
      className="mt-2 w-[250px]"
      showSearch
      placeholder="Appointment Catergories"
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        { value: "1", label: "OPD" },
        { value: "2", label: "Dental" },
        { value: "3", label: "Mental Health" },
        { value: "4", label: "Physiotherapy" },
        { value: "5", label: "Pediatrics" },
        { value: "6", label: "Cardiology" },
        { value: "7", label: "Dermatology" },
        { value: "8", label: "Radiology" },
        { value: "9", label: "ENT" },
        { value: "10", label: "Orthopedics" },
      ]}
    />
  );
}

export default MCADoctorSelections;
