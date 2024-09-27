import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Common_Btn = ({ link, linkText }) => {
  return (
    <>
      <div>
        <NavLink
          to={link}
          className="inline-flex h-[4.8rem] min-w-[14.5rem] items-center justify-center gap-[1rem] bg-primaryColor px-[2rem] py-[1.2rem] transition-all duration-[0.3s] hover:opacity-[0.8]"
        >
          <span className="text-[1.6rem] font-semibold text-whiteColor">
            {linkText}
          </span>{" "}
          <ArrowUpRight className="h-[2rem] w-[2rem] text-whiteColor" />
        </NavLink>
      </div>
    </>
  );
};

export default Common_Btn;
