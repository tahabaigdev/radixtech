import { NavLink } from "react-router-dom";
import { personaDropdownLinks, productDropdownLinks } from "../../constants";

const About_Dropdown = () => {
  return (
    <div className="shadow-shadow1 static top-[100%] z-[100] grid w-[100%] grid-cols-2 gap-[.8rem] rounded-[1rem] border border-solid border-[#e9e2da] bg-whiteColor p-[1.6rem] xl:absolute xl:w-[46.5rem]">
      <div>
        <h5 className="px-[1.6rem] py-[1.2rem] text-[1.2rem] font-bold uppercase leading-[1.6rem]">
          PRODUCT
        </h5>

        <ul>
          {productDropdownLinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className="flex items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-[1.4rem] font-semibold leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <item.icon className="h-[2rem] w-[2rem]" />

                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="px-[1.6rem] py-[1.2rem] text-[1.2rem] font-bold uppercase leading-[1.6rem]">
          PERSONA
        </h5>

        <ul>
          {personaDropdownLinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className="flex items-center gap-[1rem] rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-[1.4rem] font-semibold leading-[2.24rem] hover:bg-[#FAF8F5]"
              >
                <item.icon className="h-[2rem] w-[2rem]" />

                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About_Dropdown;
