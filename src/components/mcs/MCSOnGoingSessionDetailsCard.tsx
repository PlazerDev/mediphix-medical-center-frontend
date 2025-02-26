import { Link } from "react-router-dom";

interface Props {
  doctorImg: string;
  doctorName: string;
  doctorEducation: string;
  timeFrame: string;
  date: string;
  hallNumber: string;
  status: string;
  sessionId: string;
  clickable?: boolean;
}

function MCSOnGoingSessionDetailsCard({
  doctorImg,
  doctorName,
  doctorEducation,
  timeFrame,
  date,
  hallNumber,
  status,
  sessionId,
  clickable = true,
}: Props) {
  const cardContent = (
    <div className="bg-mediphix_card_background my-4 rounded-lg p-8">
      <p className="font-bold">Clinic Session Details</p>
      <div className="my-2 flex md:flex-row flex-col">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Time Frame</p>
            <p>{timeFrame}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Date</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Hall Number</p>
            <p>{hallNumber}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Status</p>
            <p className="text-mediphix_accent">{status}</p>
          </div>
        </div>
      </div>
      <p className="font-bold mb-2">Doctor Details</p>
      <div className="flex gap-2">
        <div>
          <img
            className="object-cover w-24 h-full rounded-lg"
            src={doctorImg}
          />
        </div>
        <div className="flex flex-col gap-2 ml-8">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Name</p>
            <p>{doctorName}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Education</p>
            <p>{doctorEducation}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return clickable ? (
    <Link to={`/medicalCenterStaff/onGoingSessions/${sessionId}`}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}

export default MCSOnGoingSessionDetailsCard;
