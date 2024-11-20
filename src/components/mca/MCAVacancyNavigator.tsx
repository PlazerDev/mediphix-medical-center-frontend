import { Steps } from "antd";
import { useEffect, useState } from "react";
import MCAVacancyNavigatorDateTime from "./MCAVacancyNavigatorDateTime";
import MCAVacancyNavigatorAdditionalDetails from "./MCAVacancyNavigatorAdditionalDetails";
import MCAVacancyNavigatorPreview from "./MCAVacancyNavigatorPreview";
import Swal from "sweetalert2";

type vacancyData = {
  mainRangeStartDate: string;
  mainRangeEndDate: string;
  selectedDate: string;
  repeatDays: string[];
  subRangeEndDate: string;
  startTime: String;
  endTime: String;
};

type additionalData = {
  aptCategories: string[];
  noteForDoctors: string;
  contactNumber: string;
};

function MCAVacancyNavigator() {
  const [current, setCurrent] = useState(0);
  const [is1Complete, setIs1Complete] = useState(false);
  const [is2Complete, setIs2Complete] = useState(false);
  const [vacancyDataList, setVacancyDataList] = useState<vacancyData[]>([]);
  const [additionalDataObj, setAdditionalDataObj] = useState<additionalData>({
    aptCategories: [],
    noteForDoctors: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (vacancyDataList.length === 0) {
      setIs1Complete(false);
    }
    if (
      additionalDataObj.aptCategories.length === 0 ||
      additionalDataObj.contactNumber === "" ||
      additionalDataObj.noteForDoctors === ""
    ) {
      setIs2Complete(false);
    }
  }, [vacancyDataList, additionalDataObj]);

  const onChange = (value: number) => {
    if (current > value) {
      setCurrent(value);
    } else if (value === 1 && is1Complete === true) {
      setCurrent(value);
    } else if (value === 2 && is1Complete === true && is2Complete === true) {
      setCurrent(value);
    } else {
      Swal.fire({
        title: "Complete Current Step to Proceed",
        text: "Please complete all the required actions in this step before moving to the next.",
        icon: "warning",
        confirmButtonColor: "#FF7300",
      });
    }
  };

  return (
    <>
      <div className="bg-mediphix_card_background rounded-lg px-8 py-4">
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={onChange}
          className="site-navigation-steps mb-4"
          items={[
            {
              title: "Dates & Time Details",
              status: is1Complete ? "finish" : "process",
              description: is1Complete ? "Completed" : "In Progress",
            },
            {
              title: "Additional Details",
              status: is2Complete ? "finish" : is1Complete ? "process" : "wait",
              description: is2Complete
                ? "Completed"
                : is1Complete
                ? "In Progress"
                : "Not Completed",
            },
            {
              title: "Preview",
              status: is2Complete ? "process" : "wait",
              description: is2Complete ? "In Progress" : "Not Completed",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        {current === 0 && (
          <MCAVacancyNavigatorDateTime
            setVacancyDataList={setVacancyDataList}
            vacancyDataList={vacancyDataList}
            setCurrent={setCurrent}
            setIs1Complete={setIs1Complete}
          />
        )}
        {current === 1 && (
          <MCAVacancyNavigatorAdditionalDetails
            additionalDataObj={additionalDataObj}
            setAdditionalDataObj={setAdditionalDataObj}
            setCurrent={setCurrent}
            setIs2Complete={setIs2Complete}
          />
        )}
        {current === 2 && (
          <MCAVacancyNavigatorPreview
            vacancyDataList={vacancyDataList}
            additionalDataObj={additionalDataObj}
          />
        )}
      </div>
    </>
  );
}

export default MCAVacancyNavigator;
