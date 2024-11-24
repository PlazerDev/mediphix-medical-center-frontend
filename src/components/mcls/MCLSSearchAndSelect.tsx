import { Select } from "antd";
import { LabReportsService } from "../../services/mcls/LabReportsService";

function MCLSSearchAndSelect() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center justify-start flex-1">
        <div className="bg-mediphix_card_background py-4 px-4 flex-1 rounded-l-lg">
          <input
            type="text"
            placeholder="Enter Doctor Name Here"
            className="w-full outline-none"
          />
        </div>
        <button className="bg-mediphix_accent hover:bg-[#ff7d13] text-mediphix_card_background py-4 px-8 rounded-r-lg">
          Search
        </button>
      </div>
      <div>
        <Select
          className="h-[58px]"
          placeholder="Appointment Category"
          style={{ width: 380 }}
          onChange={() => {}}
          options={LabReportsService.getSampleAppointmentCategories()}
        />
      </div>
    </div>
  );
}

export default MCLSSearchAndSelect;
