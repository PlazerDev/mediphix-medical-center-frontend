import { FaCirclePlus } from "react-icons/fa6";
import notSelectImg from "./../../assets/images/mca/not_selected.png";

function MCAVacancyDateTimeNotSelect() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold">You haven’t added any time slots yet !</p>
      <img src={notSelectImg} alt="Not Selected Image" className="w-52" />
      <p className="flex flex-row gap-2 items-center">
        <p>Start by clicking on</p>
        <FaCirclePlus className="text-mediphix_accent" />
        <p>button to add a new time slot.</p>
      </p>
    </div>
  );
}

export default MCAVacancyDateTimeNotSelect;
