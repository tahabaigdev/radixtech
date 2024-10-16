import { ArrowUpRight } from "lucide-react";

const Common_Btn_2 = ({ linkText, textColor, iconColor }) => {
  return (
    <>
      <div>
        <button
          className="inline-flex min-w-[14.5rem] items-center justify-center gap-[1rem] hover:underline"
          style={{ color: textColor }}
        >
          <span className="text-[1.6rem] font-semibold">{linkText}</span>{" "}
          <ArrowUpRight
            className="h-[2rem] w-[2rem]"
            style={{ color: iconColor }}
          />
        </button>
      </div>
    </>
  );
};

export default Common_Btn_2;
