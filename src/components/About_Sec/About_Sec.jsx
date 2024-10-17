import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import AboutSecImg from "../../assets/images/about-sec-img.gif";
import Accordion2 from "../Accordion/Accordion2";
import { aboutAccodionData } from "../../constants";
import LazyLoad from "react-lazyload";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About_Sec = () => {
  // Animation controls
  const controlsLeft = useAnimation(); // For image animation
  const controlsRight = useAnimation(); // For text and accordion animation
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the image is in view
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the content is in view
  });

  // Start the animations when they come into view
  useEffect(() => {
    if (imgInView) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (contentInView) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [imgInView, contentInView, controlsLeft, controlsRight]);

  return (
    <section id="about" className="overflow-x-hidden bg-secondaryColor">
      <div className="container py-[6rem]">
        <div className="grid grid-cols-1 items-start gap-[4rem] xl:grid-cols-2 xl:gap-[0rem]">
          {/* Left Reveal Animation for Image */}
          <motion.div
            ref={imgRef}
            initial={{ x: -100, opacity: 0 }} // Slide in from left
            animate={controlsLeft}
            transition={{ duration: 0.7 }}
            className="flex justify-center xl:justify-start"
          >
            <LazyLoad>
              <img
                src={AboutSecImg}
                alt="About Image"
                className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
              />
            </LazyLoad>
          </motion.div>

          {/* Right Reveal Animation for Text and Accordion */}
          <motion.div
            ref={contentRef}
            initial={{ x: 100, opacity: 0 }} // Slide in from right
            animate={controlsRight}
            transition={{ duration: 0.7 }}
            className="order-[-1] text-center xl:order-2 xl:text-left"
          >
            <Common_Heading
              title="We specialize in innovative digital solutions"
              subTitle="About Us"
              titleColor="#ffffff"
              subTitleColor="#ffffff"
            />

            <p className="mx-auto my-[3rem] max-w-[70rem] text-[1.8rem] font-medium leading-[3rem] text-whiteColor xl:mx-0 xl:max-w-full">
              RadixTech partners with nonprofits to support decision making in
              addressing their most critical challenges and unlocking growth
              opportunities. We understand the unique decision-making processes
              and challenges faced by nonprofit organizations. Beyond just
              generating ideas, we focus on designing strategic solutions and
              implementing decisive actions that drive meaningful impact.
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
