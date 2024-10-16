import { useRef, useEffect, useState } from "react";
import { PlusIcon, X } from "lucide-react";

const Accordion3 = ({ title, list, isActive, onClick }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Recalculate height when the accordion becomes active
  useEffect(() => {
    if (isActive && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isActive]);

  return (
    <div className="border-b border-solid border-[#C9C9C9] pb-[3.2rem] pt-[2.8rem]">
      {/* Accordion Header */}
      <div
        onClick={onClick}
        className={`group flex w-[100%] cursor-pointer select-none items-center justify-between transition-all duration-300 ${
          isActive ? "border-l-4 border-primaryColor pl-4" : ""
        }`}
      >
        <h5 className="text-[1.8rem] font-semibold leading-[2.4rem] text-primaryColor group-hover:text-blackColor">
          {title}
        </h5>

        {isActive ? (
          <X
            className="text-primaryColor group-hover:text-blackColor"
            strokeWidth={1}
          />
        ) : (
          <PlusIcon
            className="text-primaryColor group-hover:text-blackColor"
            strokeWidth={1}
          />
        )}
      </div>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden duration-300 ease-in-out"
        style={{
          maxHeight: `${contentHeight}px`,
        }}
      >
        {list && (
          <ul className="mt-[1.5rem] flex flex-col gap-[1rem]">
            {list.map((listItem, idx) => (
              <li key={idx}>
                <h5 className="mb-[3px] inline text-[1.4rem] font-semibold leading-[2.2rem] text-blackColor">
                  {listItem.title}
                </h5>

                <p className="inline text-[1.4rem] leading-[2.2rem] tracking-[-0.0192px] text-blackColor">
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

export default Accordion3;
