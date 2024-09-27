import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Common_Btn_2 = ({ link, linkText, textColor, iconColor }) => {
  return (
    <>
      <div>
        <NavLink
          to={link}
          className="inline-flex min-w-[14.5rem] items-center justify-center gap-[1rem] hover:underline"
          style={{ color: textColor }}
        >
          <span className="text-[1.6rem] font-semibold">{linkText}</span>{" "}
          <ArrowUpRight
            className="h-[2rem] w-[2rem]"
            style={{ color: iconColor }}
          />
        </NavLink>
      </div>
    </>
  );
};

export default Common_Btn_2;
