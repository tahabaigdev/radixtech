import {
  aboutFirstColumnDropdownLinks,
  aboutSecondColumnDropdownLinks,
} from "../../constants";

const About_Dropdown = ({ handleScroll }) => {
  return (
    <div className="static left-[50%] top-[100%] z-[100] grid w-[100%] grid-cols-2 gap-[.8rem] rounded-[1rem] border border-b-[2px] border-solid border-[#e9e2da] border-b-primaryColor bg-whiteColor p-[1.6rem] shadow-shadow1 xl:absolute xl:w-[46.5rem] xl:translate-x-[-50%]">
      <div>
        <ul>
          {aboutFirstColumnDropdownLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={handleScroll}
                className="flex w-full items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-left text-[1.4rem] font-medium leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <item.icon className="h-[2rem] min-w-[2rem]" />

                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {aboutSecondColumnDropdownLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={handleScroll}
                className="flex w-full items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-left text-[1.4rem] font-medium leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <item.icon className="h-[2rem] min-w-[2rem]" />

                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About_Dropdown;
