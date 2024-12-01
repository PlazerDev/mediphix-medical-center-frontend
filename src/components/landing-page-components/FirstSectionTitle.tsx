import { Link } from "react-router-dom";
import BtnFilled from "./BtnFilled";

function FirstSectionTitle() {
  return (
    <div className="flex flex-col jutify-center items-center gap-4 pt-8">
      <p className="font-bold text-4xl text-white">
        Welcome to Mediphix for Medical Centers
      </p>
      <p className="text-center text-white">
        Revolutionizing Patient Care and Transforming Facility Management for
        Optimal Efficiency and Patient Satisfaction
      </p>
      <Link to={"/signup"}>
        <BtnFilled
          title="Join Now"
          style="bg-mediphix_accent hover:bg-white text-white hover:text-mediphix_accent"
        />
      </Link>
    </div>
  );
}

export default FirstSectionTitle;
