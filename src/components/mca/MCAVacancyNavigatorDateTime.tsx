import MCAVacancyDateTimeNotSelect from "./MCAVacancyDateTimeNotSelect";
import MCATimePicker from "./MCATimePicker";
import { useEffect, useState } from "react";
import MCAVacancyDateSelector from "./MCAVacancyDateSelector";
import CardTitleAndValue from "../CardTitleAndValue";
import { MdDelete } from "react-icons/md";
import NormalButtonWithFunction from "../NormalButtonWithFunction";

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
  setCurrent: (value: number) => void;
  setIs1Complete: (value: boolean) => void;
}

function MCAVacancyNavigatorDateTime({ setCurrent, setIs1Complete }: Props) {
  const [timeList, setTimeList] = useState<String[][]>([]);
  const [vacancyDataList, setVacancyDataList] = useState<vacancyData[]>([]);

  // Handler to manage the selected time range
  function timeSelectedHandler(startTime: String, endTime: String) {
    const newTimeRange = [startTime, endTime];
    setTimeList((prevTimeList) => [...prevTimeList, newTimeRange]);
  }

  function deleteTimeRangeHandler(index: number) {
    setTimeList((prevTimeList) => prevTimeList.filter((_, i) => i !== index));
  }

  function deleteSelectedVacancy(index: number) {
    setVacancyDataList((prevList) => prevList.filter((_, i) => i !== index));
  }

  useEffect(() => {
    console.log(timeList);
  }, [timeList]);

  function moveToNext() {
    setIs1Complete(true);
    setCurrent(1);
  }

  return (
    <>
      {/* if no time range selected yet */}
      {timeList.length === 0 && (
        <div className="bg-mediphix_card_background rounded-lg p-8 mb-4">
          <MCAVacancyDateTimeNotSelect />
        </div>
      )}
      {timeList.map((timeData, index) => {
        return (
          <MCAVacancyDateSelector
            startTime={timeData[0]}
            endTime={timeData[1]}
            index={index}
            deleteTimeRangeHandler={deleteTimeRangeHandler}
            vacancyDataList={vacancyDataList}
            setVacancyDataList={setVacancyDataList}
          />
        );
      })}
      <MCATimePicker timeSelectedHandler={timeSelectedHandler} />
      {vacancyDataList.length !== 0 && (
        <div className="bg-mediphix_card_background rounded-lg p-8 mb-4 mt-4">
          <p className="font-bold mb-4">Selected Vacancy Dates & Times</p>
          <div className="flex flex-col gap-4">
            {vacancyDataList.map((dataObj, index) => {
              return (
                <div className="flex flex-row gap-1 border-2 border-mediphix_text_d p-4 rounded-lg items-center">
                  <CardTitleAndValue
                    title={"Start Time & End Time"}
                    value={
                      "From " + dataObj.startTime + " to " + dataObj.endTime
                    }
                  />
                  <CardTitleAndValue
                    title={"Start Date & End Date"}
                    value={
                      "From " +
                      dataObj.mainRangeStartDate +
                      " to " +
                      dataObj.mainRangeEndDate
                    }
                  />
                  <CardTitleAndValue
                    title={"Repetition"}
                    value={
                      dataObj.repeatDays.length !== 0
                        ? dataObj.repeatDays
                            .map((day) => day.toUpperCase())
                            .join(", ")
                        : "No Repetition, " + dataObj.selectedDate + " once"
                    }
                  />
                  <CardTitleAndValue
                    title={"Sub Range of Dates"}
                    value={
                      dataObj.subRangeEndDate === ""
                        ? "No subrange of dates"
                        : "From " +
                          dataObj.selectedDate +
                          " to " +
                          dataObj.subRangeEndDate
                    }
                  />
                  <button
                    className="bg-red-500 rounded-full p-1 hover:bg-red-600 h-8 w-8 flex items-center justify-center"
                    onClick={() => {
                      deleteSelectedVacancy(index);
                    }}
                  >
                    <MdDelete className="text-white text-xl" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-end mt-4">
            <NormalButtonWithFunction
              colorType={2}
              handler={moveToNext}
              title="Move to next step"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MCAVacancyNavigatorDateTime;
