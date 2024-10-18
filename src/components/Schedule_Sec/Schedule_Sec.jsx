import { Calendar } from "lucide-react";
import CtaImage from "../../assets/images/schedule-img.jpg";
import LazyLoad from "react-lazyload";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { RiContactsLine } from "react-icons/ri";
import { LuContact2 } from "react-icons/lu";

const Schedule_Sec = () => {
  // Animation controls
  const controlsLeft = useAnimation(); // For text section animation
  const controlsRight = useAnimation(); // For image animation
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2, // Trigger when 20% of text is visible
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the image is visible
  });

  // Start the animations when they come into view
  useEffect(() => {
    if (textInView) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (imageInView) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [textInView, imageInView, controlsLeft, controlsRight]);

  return (
    <section id="contact" className="overflow-x-hidden">
      <div className="container py-[6rem]">
        <div className="grid h-[100%] w-[100%] grid-cols-1 items-center gap-[4rem] overflow-hidden rounded-[1.2rem] bg-primaryColor p-[4rem] xl:grid-cols-2">
          {/* Left Reveal Animation for Text Section */}
          <motion.div
            ref={textRef}
            initial={{ x: -100, opacity: 0 }} // Slide in from the left
            animate={controlsLeft}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-center text-[4rem] font-medium leading-[5rem] tracking-[-0.64px] text-whiteColor sm:text-[3rem] sm:leading-[4rem] xl:text-left">
                Schedule a Conversation
              </h3>

              <p className="mb-[2rem] mt-[1rem] text-center text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor xl:text-left">
                Schedule a conversation with one of our experienced consultants.
                Tell us about the workflows you’re trying to improve, for a
                tailored demonstration or answers to your questions about
                RadixTech.
              </p>

              <div className="flex justify-center xl:justify-start">
                <a
                  href="mailto:info@RadixTech.org"
                  className="inline-flex h-[4.8rem] min-w-[14.8475rem] items-center justify-center gap-[1rem] bg-blackColor px-[2rem] py-[1.2rem] text-[1.6rem] leading-[2.4rem] text-whiteColor transition-all duration-[0.3s] hover:bg-tertiaryColor hover:text-blackColor"
                >
                  Talk to an Expert
                  <LuContact2 className="h-[2rem] min-w-[2rem]" />
                </a>
              </div>
            </div>

            <div className="mt-[2rem]">
              <h3 className="text-center text-[4rem] font-medium leading-[5rem] tracking-[-0.64px] text-whiteColor sm:text-[3rem] sm:leading-[4rem] xl:text-left">
                We’d love to hear from you
              </h3>

              <p className="mb-[2rem] mt-[1rem] text-center text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor xl:text-left">
                Learn how we can solve data issues for your organization, with
                our tech platforms and services specially designed for
                humanitarian and development work.
              </p>

              <div className="flex justify-center xl:justify-start">
                <a
                  href="mailto:info@RadixTech.org"
                  className="inline-flex h-[4.8rem] min-w-[14.8475rem] items-center justify-center gap-[1rem] bg-whiteColor px-[2rem] py-[1.2rem] text-[1.6rem] leading-[2.4rem] text-blackColor transition-all duration-[0.3s] hover:bg-blackColor hover:text-whiteColor"
                >
                  Get in Touch
                  <RiContactsLine />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Reveal Animation for Image */}
          <motion.div
            ref={imageRef}
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            animate={controlsRight}
            transition={{ duration: 0.7 }}
          >
            <LazyLoad className="flex justify-center overflow-hidden rounded-[1.2rem]">
              <img src={CtaImage} alt="Cta Image" />
            </LazyLoad>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule_Sec;
