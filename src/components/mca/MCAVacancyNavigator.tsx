import { Steps } from "antd";
import { useState } from "react";
import MCAVacancyNavigatorDateTime from "./MCAVacancyNavigatorDateTime";
import MCAVacancyNavigatorAdditionalDetails from "./MCAVacancyNavigatorAdditionalDetails";
import MCAVacancyNavigatorPreview from "./MCAVacancyNavigatorPreview";
import Swal from "sweetalert2";

function MCAVacancyNavigator() {
  const [current, setCurrent] = useState(0);
  const [is1Complete, setIs1Complete] = useState(false);
  const [is2Complete, setIs2Complete] = useState(false);

  const onChange = (value: number) => {
    if (current > value) {
      setCurrent(value);
    } else if (value === 2 && is1Complete === true) {
      setCurrent(value);
    } else if (value === 3 && is1Complete === true && is2Complete === true) {
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
              status: "process",
              description: "In Progress",
            },
            {
              title: "Additional Details",
              status: "wait",
              description: "Not Completed",
            },
            {
              title: "Preview",
              status: "wait",
              description: "Not Completed",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        {current === 0 && <MCAVacancyNavigatorDateTime />}
        {current === 1 && <MCAVacancyNavigatorAdditionalDetails />}
        {current === 2 && <MCAVacancyNavigatorPreview />}
      </div>
    </>
  );
}

export default MCAVacancyNavigator;
