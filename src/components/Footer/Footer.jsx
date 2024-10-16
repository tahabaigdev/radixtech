import BrandLogo from "../../assets/images/brand-logo.png";
import BrandRedIcon from "../../assets/images/brand-red-icon.png";
import {
  aboutFirstColumnDropdownLinks,
  insightsFirstColumnDropdownLinks,
  mainLinks,
  platformFirstColumnDropdownLinks,
  platformSecondColumnDropdownLinks,
  socialLinksData,
  solutionsFirstColumnDropdownLinks,
  whyFirstColumnDropdownLinks,
  whySecondColumnDropdownLinks,
} from "../../constants";

const Footer = () => {
  const scrollHandler = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondaryColor">
      <div className="container py-[8rem]">
        <div className="relative z-[1] flex flex-col overflow-hidden rounded-[1.2rem] border border-solid border-[#e9e2da] bg-whiteColor xl:flex-row">
          <img
            src={BrandRedIcon}
            alt="Icon"
            className="absolute bottom-0 right-0 z-[-1] w-[50%] opacity-5 sm:w-[40%] xl:bottom-[-11rem] xl:right-[-6rem] xl:w-[30%]"
          />

          <div className="flex flex-col justify-between gap-[1.5rem] border-solid border-[#e9e2da] p-[2rem] lg:border-r lg:p-[4rem] xl:min-w-max">
            <div className="flex flex-col gap-[1.5rem]">
              <img src={BrandLogo} alt="Brand Logo" className="max-w-[15rem]" />

              <p className="max-w-[60rem] text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary xl:max-w-[30rem]">
                Bringing technological ease to manage humanitarian and
                development work
              </p>

              <div className="flex flex-col gap-[.5rem]">
                <h6 className="text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary">
                  Stay connected and informed:
                </h6>

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
            </div>

            <div className="flex flex-col gap-[.5rem]">
              <p className="text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary">
                © 2024 RadixTech.
              </p>

              <p className="max-w-[50rem] text-[1.2rem] font-medium leading-[1.8rem] text-textPrimary xl:max-w-[30rem]">
                RadixTech is an Equal Opportunity Employer. All qualified
                applicants will receive consideration for employment without
                regard to race, color, religion, sex, gender or national origin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-solid border-[#e9e2da] lg:border-t-0 xl:grid-cols-4">
            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-primaryColor">
                  Platforms
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {platformFirstColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("platform")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  Solutions
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {solutionsFirstColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("platform")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  Why RadixTech
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {whyFirstColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("platform")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-[2rem]">
                  {whySecondColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("platform")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[4rem] p-[2rem] sm:p-[4rem]">
              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  About Us
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {aboutFirstColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("about")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[2rem]">
                <h5 className="text-[1.2rem] font-semibold uppercase leading-[15.6px] tracking-[0.4px] text-blackColor text-primaryColor">
                  Insights
                </h5>

                <ul className="flex flex-col gap-[2rem]">
                  {insightsFirstColumnDropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollHandler("about")}
                        className="text-left text-[1.4rem] font-medium capitalize leading-[2.24rem] text-blackColor transition-all duration-[0.3s] ease-in hover:text-primaryColor"
                      >
                        {item.text}
                      </button>
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
