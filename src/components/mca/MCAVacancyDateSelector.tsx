import { Checkbox, DatePicker } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface Props {
  startTime: String;
  endTime: String;
  index: number;
  deleteTimeRangeHandler: (index: number) => void;
}

function MCAVacancyDateSelector({
  startTime,
  endTime,
  index,
  deleteTimeRangeHandler,
}: Props) {
  const [isEndDateInfinte, setIsEndDateInfinte] = useState(false);
  return (
    <div className="bg-mediphix_card_background rounded-lg p-8 mb-4">
      <div className="flex flex-row justify-between">
        <p className="font-bold ">{startTime + " - " + endTime}</p>
        <button
          className="bg-red-500 rounded-full p-1 hover:bg-red-600"
          onClick={() => {
            deleteTimeRangeHandler(index);
          }}
        >
          <MdDelete className="text-white text-xl" />
        </button>
      </div>
      <p className="mt-4">Select Start Date & End Data</p>
      {/* in below picking the main range of dates  */}
      <div>
        <div className="flex flex-row gap-4">
          <div className="flex-grow flex flex-col gap-1">
            <p className="text-mediphix_text_c">Start Date</p>
            <DatePicker onChange={() => {}} size="large" />
          </div>
          <div className="flex-grow flex flex-col gap-1">
            <div className="flex flex-row justify-between items-center">
              <p className="text-mediphix_text_c">End Date</p>
              <Checkbox
                onChange={() => {
                  setIsEndDateInfinte(!isEndDateInfinte);
                }}
              >
                No specific end date (set as infinite)
              </Checkbox>
            </div>
            <DatePicker
              onChange={() => {}}
              size="large"
              disabled={isEndDateInfinte}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCAVacancyDateSelector;
