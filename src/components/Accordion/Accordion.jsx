import { useState, useRef, useEffect } from "react";
import { PlusIcon, X } from "lucide-react";

const Accordion = ({ title, content, list, defaultActive = false }) => {
  const [isActive, setIsActive] = useState(defaultActive);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  // Effect to set the correct maxHeight once the contentRef is available
  useEffect(() => {
    if (isActive && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isActive]);

  useEffect(() => {
    if (defaultActive && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [defaultActive]);

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

      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden duration-300 ease-in-out"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <p className="mt-[2.4rem] text-[1.6rem] leading-[2.4rem] tracking-[-0.0192px] text-blackColor">
          {content}
        </p>

        {list && (
          <ul className="mt-[1.5rem] flex flex-col gap-[2rem]">
            {list.map((listItem, idx) => (
              <li key={idx}>
                <h5 className="mb-[3px] text-[1.6rem] font-semibold leading-[2.2rem] text-blackColor">
                  {listItem.title}
                </h5>

                <p className="text-[1.4rem] leading-[2.2rem] tracking-[-0.0192px] text-blackColor">
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

export default Accordion;
