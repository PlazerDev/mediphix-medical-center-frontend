import { FaInfoCircle } from "react-icons/fa";
import NormalButtonWithFunction from "../NormalButtonWithFunction";

interface Props {
  title: string;
  isOngoing?: boolean;
}

function MCSQueueStatusAlert({ title, isOngoing = false }: Props) {
  return (
    <div className="bg-[#F5F5F5] border border-[#d9d9d9] py-4 px-4 rounded-lg text-mediphix_text_c flex flex-row gap-4 items-center">
      <FaInfoCircle className="text-mediphix_text_c" />
      {title}
      {isOngoing && (
        <NormalButtonWithFunction
          handler={() => {}}
          title="Start Next"
          colorType={2}
        />
      )}
    </div>
  );
}

export default MCSQueueStatusAlert;
