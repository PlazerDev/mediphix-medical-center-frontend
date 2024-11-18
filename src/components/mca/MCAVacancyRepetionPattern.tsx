import { useState } from "react";

type DaysType = {
  sun: boolean;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
};

interface Props {
  repetitionPatternDays: DaysType;
  setRepetitionPatternDays: React.Dispatch<React.SetStateAction<DaysType>>;
}

function MCAVacancyRepetitionPattern({
  repetitionPatternDays,
  setRepetitionPatternDays,
}: Props) {
  const commonStyle: string = " hover:cursor-pointer rounded-md px-2 ";
  const unSelectedStyle: string =
    " bg-mediphix_text_d hover:bg-[#ebebeb] text-mediphix_text_c ";
  const selectedStyle: string =
    " bg-mediphix_accent hover:bg-[#ff8623] text-white ";

  function daySelectHandler(day: keyof DaysType) {
    setRepetitionPatternDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  }

  return (
    <div className="flex flex-row items-center gap-2 mt-2">
      {Object.keys(repetitionPatternDays).map((day) => (
        <div
          key={day}
          onClick={() => daySelectHandler(day as keyof DaysType)}
          className={
            commonStyle +
            (repetitionPatternDays[day as keyof DaysType]
              ? selectedStyle
              : unSelectedStyle)
          }
        >
          {day.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default MCAVacancyRepetitionPattern;
