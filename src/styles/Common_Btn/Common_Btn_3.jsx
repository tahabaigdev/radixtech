import { ArrowUpRight } from "lucide-react";

const Common_Btn_3 = ({ linkText, onClick }) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="group inline-flex h-[4rem] min-w-[13rem] items-center justify-center gap-[1rem] rounded-[.5rem] border border-[transparent] bg-secondaryColor px-[2rem] py-[1.2rem] transition-all duration-[0.3s] hover:border-[#e9e2da] hover:bg-tertiaryColor"
        >
          <span className="text-[1.6rem] font-medium text-whiteColor transition-all duration-300 group-hover:text-blackColor">
            {linkText}
          </span>{" "}
          <ArrowUpRight className="h-[2rem] w-[2rem] text-whiteColor transition-all duration-300 group-hover:text-blackColor" />
        </button>
      </div>
    </>
  );
};

export default Common_Btn_3;
