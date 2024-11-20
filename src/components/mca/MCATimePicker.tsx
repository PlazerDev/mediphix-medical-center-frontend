import { useState } from "react";
import { TimePicker } from "antd";
import { FaCirclePlus } from "react-icons/fa6";
import dayjs, { Dayjs } from "dayjs";

interface TimeRange {
  startTime: string;
  endTime: string;
}

interface Props {
  timeSelectedHandler: (startTime: String, endTime: String) => void;
}

function MCATimePicker({ timeSelectedHandler }: Props) {
  const [timeRange, setTimeRange] = useState<TimeRange>({
    startTime: "",
    endTime: "",
  });

  const format = "HH:mm";

  // Handle time selection
  const handleTimeChange = (times: [Dayjs | null, Dayjs | null] | null) => {
    if (times && times[0] && times[1]) {
      setTimeRange({
        startTime: times[0].format(format),
        endTime: times[1].format(format),
      });
    } else {
      setTimeRange({
        startTime: "",
        endTime: "",
      });
    }
  };

  // Handle reset via the plus button
  const plusButtonHandler = () => {
    timeSelectedHandler(timeRange.startTime, timeRange.endTime);
    setTimeRange({
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className="bg-mediphix_card_background rounded-lg px-8 py-8 inline-flex flex-row items-center gap-4">
      <TimePicker.RangePicker
        format={format}
        onChange={handleTimeChange}
        size="large"
        value={
          timeRange.startTime && timeRange.endTime
            ? [
                dayjs(timeRange.startTime, format),
                dayjs(timeRange.endTime, format),
              ]
            : null
        }
      />
      <button onClick={plusButtonHandler} disabled={timeRange.startTime === ""}>
        <FaCirclePlus
          className={
            timeRange.startTime !== ""
              ? "text-mediphix_accent w-8 h-8"
              : "text-mediphix_text_d w-8 h-8"
          }
        />
      </button>
    </div>
  );
}

export default MCATimePicker;
