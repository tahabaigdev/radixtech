import BgGrid from "../../assets/images/grid.svg";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";
import Common_Btn_3 from "../../styles/Common_Btn/Common_Btn_3";
import HeroImg from "../../assets/images/hero-img.gif";
import { motion } from "framer-motion";

const Hero_Sec = () => {
  // Animation variants for the columns
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative overflow-hidden">
      <img
        src={BgGrid}
        alt="Background Grid"
        className="absolute left-[50%] top-0 translate-x-[-50%]"
      />

      <div className="container relative z-[1] py-[2.1rem]">
        <div className="grid grid-cols-1 items-center gap-[8rem] xl:grid-cols-2">
          <motion.div
            className="flex flex-col items-center text-center xl:items-start xl:text-left"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={leftColumnVariants}
          >
            <h1 className="text-[4rem] font-bold leading-[5rem] tracking-[-2px] text-blackColor sm:text-[5rem] sm:leading-[6rem]">
              Empowering with Data-Driven Solutions
            </h1>

            <p className="mb-[4rem] mt-[2rem] max-w-[60rem] text-[1.6rem] font-medium leading-[3.2rem] text-textPrimary xl:max-w-fit">
              RadixTech specializes in providing simplified digital platforms
              and services designed to enable real-time, data-driven
              decision-making. We serve aid workers and development
              practitioners, helping them manage both emergency responses and
              sustainable development projects efficiently.
            </p>

            <div className="flex items-center gap-[1rem]">
              <Common_Btn link="/contact" linkText="Explore" />

              <Common_Btn_3 link="/contact" linkText="Get in touch" />
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
