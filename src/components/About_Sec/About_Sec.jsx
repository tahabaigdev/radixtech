import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import AboutSecImg from "../../assets/images/about-sec-img.gif";
import Accordion2 from "../Accordion/Accordion2";
import { aboutAccodionData } from "../../constants";

const About_Sec = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.1, // Percentage of the element visible to trigger the animation
  });

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="overflow-x-hidden bg-secondaryColor"
    >
      <div className="container py-[6rem]">
        <div className="grid grid-cols-1 items-start gap-[4rem] xl:grid-cols-2">
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={AboutSecImg}
              alt="About Image"
              className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
            />
          </motion.div>

          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-[-1] text-center xl:order-2 xl:text-left"
          >
            <Common_Heading
              title="We specialize in innovative digital solutions"
              subTitle="About Us"
              titleColor="#ffffff"
              subTitleColor="#ffffff"
            />

            <p className="mx-auto my-[3rem] max-w-[70rem] text-[1.8rem] font-medium leading-[3rem] text-whiteColor xl:mx-0 xl:max-w-full">
              RadixTech partners with nonprofits to address their most critical
              challenges and tap into growth opportunities. We understand the
              unique challenges faced by nonprofit organizations. We go beyond
              ideas to design solutions and implement meaningful action
            </p>

            <div>
              {aboutAccodionData.map((item, idx) => (
                <Accordion2
                  key={idx}
                  title={item.title}
                  content={item.description}
                  list={item.list} // Pass list here
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About_Sec;
