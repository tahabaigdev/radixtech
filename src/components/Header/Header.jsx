import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import BrandLogo from "../../assets/images/brand-logo.png";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";

const Header = () => {
  return (
    <header className="border-b border-solid border-[rgb(233_226_218)] bg-whiteColor">
      <div className="container flex items-center justify-between py-[2rem]">
        <div className="flex-1">
          <NavLink to="/">
            <img src={BrandLogo} alt="Brand Logo" className="max-w-[16rem]" />
          </NavLink>
        </div>

        <div className="flex-2">
          <nav>
            <ul className="flex items-center justify-center gap-[4rem]">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className="nav-item text-[1.4rem] font-semibold leading-[2.24rem] text-textPrimary hover:text-blackColor hover:underline"
                  >
                    {item.linkText}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex-1 text-end">
          <Common_Btn link="/contact" linkText="Get in Touch" />
        </div>
      </div>
    </header>
  );
};

export default Header;
