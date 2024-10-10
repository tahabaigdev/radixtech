import BgGrid from "../../assets/images/grid.svg";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";
import HeroAvatar1 from "../../assets/images/hero-avatar-1.avif";
import HeroAvatar2 from "../../assets/images/hero-avatar-2.avif";
import HeroAvatar3 from "../../assets/images/hero-avatar-3.avif";
import HeroAvatar4 from "../../assets/images/hero-avatar-4.avif";
import HeroAvatar5 from "../../assets/images/hero-avatar-5.avif";
import RatingStar from "../../assets/images/rating-star.svg";
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

      <div className="container relative z-[1] py-[8rem]">
        <div className="grid grid-cols-1 items-center gap-[8rem] xl:grid-cols-2">
          <motion.div
            className="flex flex-col items-center text-center xl:items-start xl:text-left"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={leftColumnVariants}
          >
            <h1 className="text-[4.5rem] font-bold leading-[5.5rem] tracking-[-2px] text-blackColor sm:text-[6rem] sm:leading-[7rem]">
              RadixTech: Where data meets impact.
            </h1>

            <p className="mb-[4rem] mt-[2rem] max-w-[60rem] text-[1.6rem] font-medium leading-[3.2rem] text-textPrimary xl:max-w-fit">
              RadixTech offers simplified digital platforms and services to
              support data-driven decisions in real time for aid workers and
              development practitioners.
            </p>

            <Common_Btn link="/contact" linkText="Why Choose Us" />

            {/* <div className="mt-[4rem] flex items-center gap-[2rem]">
              <div>
                <ul className="flex items-center">
                  {[
                    HeroAvatar1,
                    HeroAvatar2,
                    HeroAvatar3,
                    HeroAvatar4,
                    HeroAvatar5,
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="hero-avatar h-[4.8rem] w-[4.8rem] overflow-hidden rounded-[50%] border-[2px] border-solid border-[#faf8f5]"
                    >
                      <img src={item} alt="Avatar Image" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[.4rem]">
                <h4 className="text-[2rem] font-medium text-[#333333]">
                  4.5 Stars
                </h4>

                <img src={RatingStar} alt="Rating Star" />
              </div>
            </div> */}
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
