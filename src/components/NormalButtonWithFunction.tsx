interface Props {
  title: string;
  colorType: number;
  handler: () => void;
}

function NormalButtonWithFunction({ title, colorType, handler }: Props) {
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
    <div className="h-10" onClick={handler}>
      <div
        className={`${bgColor}  ${hoverBgColor} px-4 rounded-md hover:cursor-pointer text-white flex flex-row justify-center items-center gap-4 h-full`}
      >
        <div className="whitespace-nowrap">{title}</div>
      </div>
    </div>
  );
}

export default NormalButtonWithFunction;
