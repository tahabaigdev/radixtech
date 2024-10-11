import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Common_Btn_3 = ({ link, linkText }) => {
  return (
    <>
      <div>
        <NavLink
          to={link}
          className="inline-flex h-[4rem] min-w-[13rem] items-center justify-center gap-[1rem] rounded-[.5rem] bg-secondaryColor px-[2rem] py-[1.2rem] transition-all duration-[0.3s] hover:bg-primaryColor"
        >
          <span className="text-[1.6rem] font-medium text-whiteColor">
            {linkText}
          </span>{" "}
          <ArrowUpRight className="h-[2rem] w-[2rem] text-whiteColor" />
        </NavLink>
      </div>
    </>
  );
};

export default Common_Btn_3;
