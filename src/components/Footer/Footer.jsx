import { NavLink } from "react-router-dom";
import BrandLogo from "../../assets/images/brand-logo.png";
import {
  mainLinks,
  personaDropdownLinks,
  productDropdownLinks,
  socialLinksData,
} from "../../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container pb-[8rem]">
        <div className="flex flex-col border border-solid border-[#e9e2da] bg-whiteColor xl:flex-row">
          <div className="flex min-w-max flex-col justify-between gap-[1.5rem] border-solid border-[#e9e2da] p-[2rem] lg:border-r lg:p-[4rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <img src={BrandLogo} alt="Brand Logo" className="max-w-[15rem]" />

              <p className="text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary">
                Bringing technological ease to manage.
              </p>

              <ul className="flex items-center gap-[1rem]">
                {socialLinksData.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>
                      <item.icon className="text-[1.8rem] text-textPrimary transition-all duration-[0.3s] ease-in hover:text-primaryColor" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary">
                © 2024 RadixTech. All rights reserved
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-solid border-[#e9e2da] lg:border-t-0 xl:grid-cols-4">
            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  MAIN LINKS
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {mainLinks.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        className="text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  PRODUCT
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {productDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        className="text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  PERSONA
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {personaDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        className="text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  PERSONA
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {personaDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        className="text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
