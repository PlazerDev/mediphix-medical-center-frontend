import MCAVacancyDateTimeNotSelect from "./MCAVacancyDateTimeNotSelect";
import MCATimePicker from "./MCATimePicker";
import { useEffect, useState } from "react";
import MCAVacancyDateSelector from "./MCAVacancyDateSelector";

function MCAVacancyNavigatorDateTime() {
  const [timeList, setTimeList] = useState<String[][]>([]);

  // Handler to manage the selected time range
  function timeSelectedHandler(startTime: String, endTime: String) {
    const newTimeRange = [startTime, endTime];
    setTimeList((prevTimeList) => [...prevTimeList, newTimeRange]);
  }

  function deleteTimeRangeHandler(index: number) {
    setTimeList((prevTimeList) => prevTimeList.filter((_, i) => i !== index));
  }

  useEffect(() => {
    console.log(timeList);
  }, [timeList]);

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
          />
        );
      })}
      <MCATimePicker timeSelectedHandler={timeSelectedHandler} />
    </>
  );
}

export default MCAVacancyNavigatorDateTime;
