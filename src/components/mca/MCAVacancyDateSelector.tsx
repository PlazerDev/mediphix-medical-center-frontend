import { Checkbox, DatePicker } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import MCAVacancyCalender from "./MCAVacancyCalender";
import dayjs, { Dayjs } from "dayjs";

type vacancyData = {
  mainRangeStartDate: string;
  mainRangeEndDate: string;
  selectedDate: string;
  repeatDays: string[];
  subRangeEndDate: string;
  startTime: String;
  endTime: String;
};

interface Props {
  startTime: String;
  endTime: String;
  index: number;
  vacancyDataList: vacancyData[];
  deleteTimeRangeHandler: (index: number) => void;
  setVacancyDataList: (vacancyDataList: vacancyData[]) => void;
}

function MCAVacancyDateSelector({
  startTime,
  endTime,
  index,
  deleteTimeRangeHandler,
  setVacancyDataList,
  vacancyDataList,
}: Props) {
  const [isEndDateInfinte, setIsEndDateInfinte] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function vacancyDataHandler(
    selectedDate: string,
    repeatDays: string[],
    subRangeEndDate: string
  ) {
    setVacancyDataList([
      ...vacancyDataList,
      {
        mainRangeStartDate: startDate,
        mainRangeEndDate: isEndDateInfinte ? "infinity" : endDate,
        selectedDate: selectedDate,
        repeatDays: repeatDays,
        subRangeEndDate: subRangeEndDate ? subRangeEndDate : "",
        startTime: startTime,
        endTime: endTime,
      },
    ]);
  }

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
      {/* Below picking the main range of dates  */}
      <div className="mt-4">
        <p>Select Start Date & End Data</p>
        <div>
          <div className="flex flex-row gap-4">
            <div className="flex-grow flex flex-col gap-1">
              <p className="text-mediphix_text_c">Start Date</p>
              <DatePicker
                onChange={(date, dateString) => {
                  if (typeof dateString === "string") {
                    setStartDate(dateString);
                  }
                  // console.log("Selected Start Date:", dateString);
                }}
                size="large"
              />
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
                onChange={(date, dateString) => {
                  if (typeof dateString === "string") {
                    setEndDate(dateString);
                  }
                  // console.log("Selected End Date:", dateString);
                }}
                size="large"
                disabled={isEndDateInfinte}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Below the calander */}
      <div className="mt-4">
        {startDate !== "" && (endDate !== "" || isEndDateInfinte) && (
          <MCAVacancyCalender
            startDate={dayjs(startDate)}
            endDate={isEndDateInfinte ? null : dayjs(endDate)}
            vacancyDataHandler={vacancyDataHandler}
          />
        )}
      </div>
    </div>
  );
}

export default MCAVacancyDateSelector;
