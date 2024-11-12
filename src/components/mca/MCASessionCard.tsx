import { Link } from "react-router-dom";
import docImg from "./../../assets/images/mcs/doctorImage.jpeg";
import { Divider } from "antd";
import { FaAnglesRight } from "react-icons/fa6";

function MCASessionCard() {
  return (
    <div className="mb-4 bg-mediphix_card_background rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex-grow">
          <div className="flex items-center justify-between pr-2">
            <div className="rounded-tl-lg rounded-br-lg bg-mediphix_text_c text-mediphix_background px-8 py-4 inline-flex items-center">
              08.00 AM - 11.00 AM
              <Divider type="vertical" className="bg-mediphix_text_d" />
              OPD
            </div>
          </div>
          <div className="px-8 py-4 flex flex-col gap-4">
            <div>
              <p className="font-bold mb-2">Doctor Details</p>
              <div className="flex flex-row gap-4">
                <div className="">
                  <img
                    src={docImg}
                    alt="doctor image"
                    className="object-contain w-32 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <div>
                    <p className="text-mediphix_text_c text-sm">Name</p>
                    <Link to="" className="text-mediphix_accent underline">
                      Dr. Nishanthana Perera
                    </Link>
                  </div>
                  <div>
                    <p className="text-mediphix_text_c text-sm">Education</p>
                    <p>MBBS (COL) specialized in cardiology</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">Additional Details</p>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-mediphix_text_c text-sm">
                    Special Note From Doctor
                  </p>
                  <p>N/A</p>
                </div>
                <div>
                  <p className="text-mediphix_text_c text-sm">
                    Special Note From Medical Center
                  </p>
                  <p>
                    Please arrive at least 15 minutes before your scheduled
                    appointment time for payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8">
          <Link to="/medicalCenterAdmin/clinicSessions/upcommingSessions/45612">
            <div className="bg-mediphix_accent hover:bg-[#ff9035] rounded-full h-12 w-12 flex items-center justify-center text-white">
              <FaAnglesRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MCASessionCard;
