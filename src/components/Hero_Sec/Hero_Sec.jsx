import BgGrid from "../../assets/images/grid.svg";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";
import Common_Btn_3 from "../../styles/Common_Btn/Common_Btn_3";
import HeroImg from "../../assets/images/hero-img.gif";
import { motion } from "framer-motion";
import { RiContactsLine } from "react-icons/ri";

const Hero_Sec = () => {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const scrollHandler = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-whiteColor">
      <img
        src={BgGrid}
        alt="Background Grid"
        className="absolute left-[50%] top-0 translate-x-[-50%]"
      />

      <div className="container relative z-[1] py-[6rem]">
        <div className="grid grid-cols-1 items-center gap-[8rem] xl:grid-cols-2">
          <motion.div
            className="flex flex-col items-center text-center xl:items-start xl:text-left"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={leftColumnVariants}
          >
            <h1 className="text-[3rem] font-bold leading-[4rem] tracking-[-2px] text-blackColor sm:text-[4rem] sm:leading-[5rem]">
              Built by and for Humanitarian Aid Workers and Development
              Practitioners!
            </h1>

            <p className="mb-[4rem] mt-[2rem] max-w-[60rem] text-[1.6rem] font-medium leading-[3.2rem] text-textPrimary xl:max-w-fit">
              RadixTech combines effective aid, humanitarian action, and
              technology expertise to deliver platforms and services
              specifically designed for impactful humanitarian work and global
              movement. Our platforms and services streamline processes,
              transforming data into actionable insights that enable data-driven
              decision-making.{" "}
              <span className="bg-[#FEF7BD]">
                With extensive experience in humanitarian response and
                sustainable development projects,
              </span>{" "}
              we understand the unique needs, operational challenges, and
              complex environments in which nonprofits and aid
              organizations operate.
            </p>

            <div className="flex items-center gap-[1rem]">
              <Common_Btn
                onClick={() => scrollHandler("services")}
                linkText="Explore"
              />

              <a
                href="mailto:info@RadixTech.org"
                className="group inline-flex h-[4rem] min-w-[13rem] items-center justify-center gap-[1rem] rounded-[.5rem] border border-[transparent] bg-secondaryColor px-[2rem] py-[1.2rem] transition-all duration-[0.3s] hover:border-[#e9e2da] hover:bg-tertiaryColor"
              >
                <span className="text-[1.6rem] font-medium text-whiteColor transition-all duration-300 group-hover:text-blackColor">
                  Get in Touch
                </span>

                <RiContactsLine className="h-[2rem] w-[2rem] text-whiteColor transition-all duration-300 group-hover:text-blackColor" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center xl:justify-end"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={rightColumnVariants}
          >
            <div className="relative h-[50rem] w-[50rem] overflow-hidden rounded-[1.2rem]">
              <img
                src={HeroImg}
                alt="Hero Image"
                className="h-[100%] w-[100%]"
              />

              <div className="absolute bottom-0 right-0 bg-[#faf8f5] px-[2rem] py-[2rem] md:max-w-[38rem] md:rounded-tl-[6rem]">
                <ul className="flex flex-wrap justify-center gap-[1.4rem] md:justify-end">
                  {[
                    "Statistical Analysis",
                    "Product Development",
                    "Data Management",
                    "Machine Learning",
                    "MEAL & MIS",
                    "Geographic Information Systems",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="inline-flex rounded-[3.4rem] border border-solid border-textPrimary px-[1.5rem] py-[.4rem] text-[1.2rem] font-medium text-textPrimary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Sec;
