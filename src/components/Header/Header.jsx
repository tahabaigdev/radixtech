import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import BrandLogo from "../../assets/images/brand-logo.png";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";
import { ChevronDown } from "lucide-react";
import Platform_Dropdown from "../Dropdowns/Platform_Dropdown";
import Insights_Dropdown from "../Dropdowns/Insights_Dropdown";
import Solutions_Dropdown from "../Dropdowns/Solutions_Dropdown";
import Why_Dropdown from "../Dropdowns/Why_Dropdown";
import About_Dropdown from "../Dropdowns/About_Dropdown";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDropdownDisabled, setIsDropdownDisabled] = useState(false);

  // Function to check window width and enable/disable dropdowns
  const handleResize = () => {
    if (window.innerWidth <= 1279) {
      setIsDropdownDisabled(true);
    } else {
      setIsDropdownDisabled(false);
    }
  };

  useEffect(() => {
    // Check initial window size
    handleResize();

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    if (!isDropdownDisabled) {
      setActiveDropdown(null);
    }
  };

  // Toggle hamburger menu
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const scrollHandler = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky left-0 top-0 z-[998] border-b border-solid border-[rgb(233_226_218)] bg-whiteColor">
      <div className="container flex items-center justify-between py-[2rem]">
        <div className="inline-flex flex-1 items-center">
          <button onClick={() => scrollHandler("hero")}>
            <img src={BrandLogo} alt="Brand Logo" className="max-w-[16rem]" />
          </button>
        </div>

        <div
          className={`${isHamburgerOpen ? "block" : "hidden xl:block"} absolute left-0 top-[100%] w-[100%] bg-whiteColor xl:static xl:w-auto xl:bg-none`}
        >
          <nav>
            <ul className="flex w-[100%] flex-col items-center justify-center gap-[.8rem] xl:flex-row">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="relative w-[100%] xl:w-auto"
                  onMouseEnter={() =>
                    !isDropdownDisabled && toggleDropdown(item.linkText)
                  }
                  onMouseLeave={closeDropdown}
                >
                  <button
                    onClick={() => scrollHandler(item.arg)}
                    className="nav-item inline-flex w-[100%] items-center justify-between gap-[.5rem] px-[1.6rem] py-[1.2rem] text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary hover:text-blackColor hover:underline xl:w-auto xl:justify-normal"
                  >
                    {item.linkText}
                    <ChevronDown
                      className={`h-[1.8rem] w-[1.8rem] ${
                        activeDropdown === item.linkText ? "rotate-180" : ""
                      }`}
                      onClick={() => toggleDropdown(item.linkText)}
                    />
                  </button>

                  {/* Render dropdowns */}
                  {activeDropdown === "Platforms" &&
                    item.linkText === "Platforms" && (
                      <Platform_Dropdown
                        handleScroll={() => scrollHandler(item.arg)}
                      />
                    )}
                  {activeDropdown === "Solutions" &&
                    item.linkText === "Solutions" && (
                      <Solutions_Dropdown
                        handleScroll={() => scrollHandler(item.arg)}
                      />
                    )}
                  {activeDropdown === "Insights" &&
                    item.linkText === "Insights" && (
                      <Insights_Dropdown
                        handleScroll={() => scrollHandler(item.arg)}
                      />
                    )}
                  {activeDropdown === "Why RadixTech" &&
                    item.linkText === "Why RadixTech" && (
                      <Why_Dropdown
                        handleScroll={() => scrollHandler(item.arg)}
                      />
                    )}
                  {activeDropdown === "About Us" &&
                    item.linkText === "About Us" && (
                      <About_Dropdown
                        handleScroll={() => scrollHandler(item.arg)}
                      />
                    )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-[1rem]">
          <div>
            <Common_Btn
              onClick={() => scrollHandler("contact")}
              linkText="Contact Us"
            />
          </div>

          {/* Hamburger Button */}
          <div
            className={`hamburger flex h-[3rem] w-[2.5rem] cursor-pointer flex-col items-center justify-center gap-[.5rem] xl:hidden ${
              isHamburgerOpen ? "open" : ""
            }`}
            onClick={toggleHamburger}
          >
            <span
              className={`bar block h-[.3rem] w-full rounded-[2rem] bg-blackColor ${
                isHamburgerOpen ? "translate-y-[.8rem] rotate-45" : ""
              }`}
            ></span>

            <span
              className={`bar block h-[.3rem] w-full rounded-[2rem] bg-blackColor ${
                isHamburgerOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`bar block h-[.3rem] w-full rounded-[2rem] bg-blackColor ${
                isHamburgerOpen ? "-translate-y-[.8rem] -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
