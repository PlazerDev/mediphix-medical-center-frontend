import { Link } from "react-router-dom";
import bgImg from "./../../assets/images/mcs/widgetsBg.png";

interface Prop {
  buttonTitle: string;
  isPrimary: boolean;
  buttonIcon: React.ElementType;
  path: string;
}

function MCSCustomButton({
  buttonTitle,
  isPrimary,
  buttonIcon: ButtonIcon,
  path,
}: Prop) {
  const buttonBgColorStyle: string = isPrimary
    ? "bg-mediphix_accent hover:bg-[#fa7d16]"
    : "bg-mediphix_text_b hover:bg-[#424242]";

  return (
    <Link
      to={path}
      className={
        buttonBgColorStyle +
        " hover:cursor-pointer w-full md:w-2/12 h-32 flex flex-col relative justify-center items-center rounded-lg"
      }
    >
      <img
        src={bgImg}
        alt="bgImg"
        className="h-full absolute right-0 mix-blend-luminosity opacity-25"
      />
      <div className="z-10 flex flex-col justify-center items-center gap-4">
        <ButtonIcon className="text-4xl text-mediphix_card_background" />
        <p className="text-mediphix_card_background font-bold text-center">
          {buttonTitle}
        </p>
      </div>
    </Link>
  );
}

export default MCSCustomButton;
