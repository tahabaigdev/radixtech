import { Calendar } from "lucide-react";
import CtaImage from "../../assets/images/schedule-img.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Book_Sec = () => {
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
    <section ref={ref} className="overflow-x-hidden">
      <div className="container py-[8rem] xl:py-[10rem]">
        <div className="grid h-[100%] w-[100%] grid-cols-1 items-center gap-[4rem] bg-primaryColor p-[4rem] lg:grid-cols-2">
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-center text-[4rem] font-medium leading-[5rem] tracking-[-0.64px] text-whiteColor sm:text-[5rem] sm:leading-[6rem] lg:text-left">
              Schedule a demo
            </h3>

            <p className="mb-[4rem] mt-[1rem] text-center text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor lg:text-left">
              Learn how we can solve data issues for your organization, with our
              tech platforms and services specially designed for humanitarian
              and development work.
            </p>

            <div className="text-center lg:text-left">
              <a
                href="mailto:info@RadixTech.org"
                className="inline-flex h-[4.8rem] min-w-[14.8475rem] items-center justify-center gap-[1rem] bg-blackColor px-[2rem] py-[1.2rem] text-[1.6rem] font-semibold leading-[2.4rem] text-whiteColor"
              >
                Schedule a demo <Calendar />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center overflow-hidden rounded-[1.2rem]"
          >
            <img src={CtaImage} alt="Cta Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Book_Sec;
