import { useState, useRef } from "react";
import { PlusIcon, X } from "lucide-react";

const Accordion2 = ({ title, content, list }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="border-b border-solid border-[#C9C9C9] pb-[1rem] pt-[1rem]">
      <div
        className="group flex w-[100%] cursor-pointer select-none items-center justify-between"
        onClick={toggleAccordion}
      >
        <h5 className="text-[1.8rem] font-medium leading-[2.4rem] text-whiteColor">
          {title}
        </h5>

        {isActive ? (
          <X strokeWidth={1} className="text-whiteColor" />
        ) : (
          <PlusIcon strokeWidth={1} className="text-whiteColor" />
        )}
      </div>

      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden duration-300 ease-in-out"
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p className="mt-[1rem] text-[1.6rem] leading-[2.4rem] tracking-[-0.0192px] text-whiteColor">
          {content}
        </p>

        {list && (
          <ul className="mt-[1.5rem] flex flex-col gap-[2rem]">
            {list.map((listItem, idx) => (
              <li key={idx}>
                <h5 className="mb-[3px] text-[1.6rem] font-semibold leading-[2.2rem] text-whiteColor">
                  {listItem.title}
                </h5>

                <p className="text-[1.4rem] leading-[2.2rem] tracking-[-0.0192px] text-whiteColor">
                  {listItem.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordion2;
