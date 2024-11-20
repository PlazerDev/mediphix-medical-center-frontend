import React, { useRef, useState } from "react";
import { Calendar, DatePicker, Modal, Switch, theme } from "antd";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import MCAVacancyRepetionPattern from "./MCAVacancyRepetionPattern";

interface Props {
  startDate: Dayjs;
  endDate: Dayjs | null;
  vacancyDataHandler: (
    selectedDate: string,
    repeatDays: string[],
    subRangeEndDate: string
  ) => void;
}

type DaysType = {
  sun: boolean;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
};

const { RangePicker } = DatePicker;

function MCAVacancyCalender({ startDate, endDate, vacancyDataHandler }: Props) {
  const { token } = theme.useToken();
  const [value, setValue] = useState(() => dayjs());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repeatingDates, setRepeatingDates] = useState<boolean>(false);
  const [hasSubRange, setHasSubRange] = useState<boolean>(false);

  const [repetitionPatternDays, setRepetitionPatternDays] = useState<DaysType>({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });

  const [repeatSubRangeEndDate, setRepeatSubRangeEndDate] =
    useState<string>("");

  // Use state to control the Switch components
  const [repeatSwitchChecked, setRepeatSwitchChecked] =
    useState<boolean>(false);
  const [subRangeSwitchChecked, setSubRangeSwitchChecked] =
    useState<boolean>(false);

  // handle when select a date on the calender
  const onDateSelect = (newValue: Dayjs) => {
    let isInRange: boolean;
    if (
      newValue.isAfter(startDate, "day") ||
      newValue.isSame(startDate, "day")
    ) {
      // After or same as startDate
      if (endDate === null) {
        isInRange = true;
      } else {
        isInRange =
          newValue.isBefore(endDate, "day") || newValue.isSame(endDate, "day");
      }
    } else {
      isInRange = false;
    }

    if (!isInRange) {
      Swal.fire({
        title: "Invalid Date Selection",
        text: "The selected date is outside the allowed range. Please choose a date between the start date and the end date.",
        icon: "error",
        confirmButtonColor: "#FF7300",
      });
    } else {
      // open the model
      setValue(newValue);
      showModal();
    }
  };

  // Modal related functions
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const selectedDays = Object.keys(repetitionPatternDays).filter(
      (day) => repetitionPatternDays[day as keyof DaysType]
    );

    vacancyDataHandler(
      value.format("YYYY-MM-DD"),
      selectedDays,
      repeatSubRangeEndDate
    );
    handleCancel();
  };

  const handleCancel = () => {
    setRepetitionPatternDays({
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    });
    setRepeatSwitchChecked(false);
    setSubRangeSwitchChecked(false);
    setValue(dayjs());
    setRepeatingDates(false);
    setRepeatSubRangeEndDate("");
    setHasSubRange(false);
    setIsModalOpen(false);
  };

  // handle switch changes
  const repeatSwitchHandler = (checked: boolean) => {
    setRepeatSwitchChecked(checked);
    setRepeatingDates(checked);
  };

  const repeatSubRangeSwitchHandler = (checked: boolean) => {
    setSubRangeSwitchChecked(checked);
    setHasSubRange(checked);
  };

  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
      }}
    >
      <Calendar
        fullscreen={false}
        onPanelChange={() => {}}
        onSelect={onDateSelect}
        value={value}
      />
      <Modal
        title={value.format("dddd DD MMM YYYY")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="flex flex-row items-center gap-2">
            <Switch
              onChange={repeatSwitchHandler}
              size={"small"}
              checked={repeatSwitchChecked}
            />
            <p>There is a repetition of dates</p>
          </div>
          {!repeatingDates && (
            <p className="text-mediphix_text_b mt-4">
              If you don't have repetition for{" "}
              <b>"{value.format("dddd DD MMM YYYY")}"</b>, simply press the{" "}
              <b>OK</b> button to confirm the date.
            </p>
          )}
          {repeatingDates && (
            <>
              <div className="mt-2">
                <p className="">Select repetition pattern (Weekly)</p>
                <MCAVacancyRepetionPattern
                  repetitionPatternDays={repetitionPatternDays}
                  setRepetitionPatternDays={setRepetitionPatternDays}
                />
              </div>
              {/* <div className="mt-8">
                <div className="flex flex-row items-center gap-2">
                  <Switch
                    onChange={repeatSubRangeSwitchHandler}
                    size={"small"}
                    checked={subRangeSwitchChecked} // Use state to control the checked value
                  />
                  <p>There is a sub range of dates</p>
                </div>
                {hasSubRange && (
                  <>
                    <p className="mt-2">Select end date of the sub range</p>
                    <RangePicker
                      className="mt-2"
                      defaultValue={[
                        dayjs(value.format("YYYY-MM-DD"), "YYYY-MM-DD"),
                        null,
                      ]}
                      onChange={(dates, dateString) => {
                        setRepeatSubRangeEndDate(dateString[1]);
                      }}
                    />
                  </>
                )}
              </div> */}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default MCAVacancyCalender;
