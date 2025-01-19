import { Button } from "antd";
import emptyImg from "./../assets/images/mcs/ongoing_appointment.png";

interface Props {
  title: string;
  msg: string;
}
function CustomEmpty({ title, msg }: Props) {
  return (
    <div className="bg-mediphix_card_background p-8 rounded-lg flex flex-col items-center">
      <img src={emptyImg} alt="" className="md:w-60 w-28 object-contain" />
      <p className="text-center font-bold md:text-lg text-mediphix_text_b">
        {title}
      </p>
      <p className="text-center text-mediphix_text_c">{msg}</p>
      <Button type="primary" className="mt-4">
        Back
      </Button>
    </div>
  );
}

export default CustomEmpty;
