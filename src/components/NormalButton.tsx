import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  colorType: number;
}

function NormalButton({ title, link, colorType }: Props) {
  let bgColor = "";
  let hoverBgColor = "";

  if (colorType === 1) {
    bgColor = "bg-mediphix_text_b";
    hoverBgColor = "hover:bg-[#535353]";
  } else if (colorType === 2) {
    bgColor = "bg-mediphix_accent";
    hoverBgColor = "hover:bg-[#FF9129]";
  }

  return (
    <Link to={link} className="h-10">
      <div
        className={`${bgColor}  ${hoverBgColor} px-4 rounded-md hover:cursor-pointer text-white flex flex-row justify-center items-center gap-4 h-full`}
      >
        <div className="whitespace-nowrap">{title}</div>
      </div>
    </Link>
  );
}

export default NormalButton;
