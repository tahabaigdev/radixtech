import {
  platformFirstColumnDropdownLinks,
  platformSecondColumnDropdownLinks,
  platformThirdColumnDropdownLinks,
} from "../../constants";

const Platform_Dropdown = ({ handleScroll }) => {
  return (
    <div className="static left-[50%] top-[100%] z-[100] grid w-[100%] grid-cols-2 gap-[.8rem] rounded-[1rem] border border-b-[4px] border-solid border-[#e9e2da] border-b-primaryColor bg-whiteColor p-[1.6rem] shadow-shadow1 md:grid-cols-3 xl:absolute xl:w-[80rem] xl:translate-x-[-50%]">
      <div>
        <h5 className="px-[1.6rem] py-[1.2rem] text-[1.2rem] font-bold uppercase leading-[1.6rem] text-primaryColor">
          PRODUCT
        </h5>

        <ul>
          {platformFirstColumnDropdownLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={handleScroll}
                className="flex w-full items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-left text-[1.4rem] font-medium leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <img
                  src={item.icon}
                  className="h-[2rem] min-w-[2rem]"
                  alt="Icon"
                />

                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="px-[1.6rem] py-[1.2rem] text-[1.2rem] font-bold uppercase leading-[1.6rem] text-primaryColor">
          SHARED FEATURES
        </h5>

        <ul>
          {platformSecondColumnDropdownLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={handleScroll}
                className="flex w-full items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-left text-[1.4rem] font-medium leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <img
                  src={item.icon}
                  className="h-[2rem] min-w-[2rem]"
                  alt="Icon"
                />

                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="pointer-events-none invisible px-[1.6rem] py-[1.2rem] text-[1.2rem] font-bold uppercase leading-[1.6rem] opacity-0">
          SHARED FEATURES
        </h5>

        <ul>
          {platformThirdColumnDropdownLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={handleScroll}
                className="flex w-full items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-left text-[1.4rem] font-medium leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <img
                  src={item.icon}
                  className="h-[2rem] min-w-[2rem]"
                  alt="Icon"
                />

                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Platform_Dropdown;
