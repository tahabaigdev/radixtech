import { useState, useRef } from "react";
import { PlusIcon, X } from "lucide-react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="border-b border-solid border-[#C9C9C9] pb-[3.2rem] pt-[2.8rem]">
      <div
        className="group flex w-[100%] cursor-pointer select-none items-center justify-between"
        onClick={toggleAccordion}
      >
        <h5 className="text-[1.8rem] font-semibold leading-[2.4rem] text-blackColor group-hover:text-primaryColor">
          {title}
        </h5>

        {isActive ? (
          <X className="group-hover:text-primaryColor" strokeWidth={1} />
        ) : (
          <PlusIcon className="group-hover:text-primaryColor" strokeWidth={1} />
        )}
      </div>

      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden duration-300"
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p className="mt-[2.4rem] text-[1.6rem] leading-[2.4rem] tracking-[-0.0192px] text-blackColor">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
