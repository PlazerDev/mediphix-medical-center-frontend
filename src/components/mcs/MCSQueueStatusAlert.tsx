import { FaInfoCircle } from "react-icons/fa";
import NormalButtonWithFunction from "../NormalButtonWithFunction";
import { SessionService } from "../../services/mca/SessionService";
import { useLoading } from "../../contexts/LoadingContext";
import { useAuthContext } from "@asgardeo/auth-react";

interface Props {
  title: string;
  isOngoing?: boolean;
  data: any;
  sessionId: string;
}

function MCSQueueStatusAlert({
  title,
  isOngoing = false,
  sessionId,
  data,
}: Props) {
  const { startLoading, stopLoading } = useLoading();
  const { getAccessToken } = useAuthContext();

  const nextAppointmenthandler = () => {
    startLoading();
    SessionService.stratNextAppointment(
      sessionId,
      data.slotId,
      getAccessToken,
      stopLoading
    );
  };

  return (
    <div className="bg-[#F5F5F5] border border-[#d9d9d9] py-4 px-4 rounded-lg text-mediphix_text_c flex flex-row gap-4 items-center">
      <FaInfoCircle className="text-mediphix_text_c" />
      {title}
      {isOngoing && (
        <NormalButtonWithFunction
          handler={nextAppointmenthandler}
          title="Start Next"
          colorType={2}
        />
      )}
    </div>
  );
}

export default MCSQueueStatusAlert;
