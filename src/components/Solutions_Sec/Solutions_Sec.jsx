import { solutionsData } from "../../constants";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Solutions_Sec = () => {
  // Animation variant for fade in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Set up `useInView` for Common_Heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solutions" className="overflow-x-hidden bg-tertiaryColor">
      <div className="container py-[6rem]">
        <div className="flex items-start justify-center gap-[8rem] text-center xl:justify-between xl:text-left">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-[100rem]"
          >
            <Common_Heading
              title="Optimized for productivity, cost savings, and growth potential."
              subTitle="Solutions"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </motion.div>
        </div>

        <div className="mt-[8rem] grid gap-[3.2rem] lg:grid-cols-2">
          {solutionsData.map((item, index) => {
            // Set up `useInView` for each grid item
            const [ref, inView] = useInView({
              triggerOnce: true, // Triggers animation only once
              threshold: 0.1, // 10% of the element needs to be visible to trigger
            });

            return (
              <motion.div
                ref={ref} // Pass the ref to the motion element
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate when in view
                variants={fadeInVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1, // Optional stagger between items
                }}
                key={item.id}
                className="flex flex-col items-center gap-[1rem] border-b border-[transparent] p-[2rem] pb-[4rem] shadow-shadow2 transition-all duration-300 hover:border-primaryColor hover:shadow-shadow3 sm:flex-row"
              >
                <div>
                  <item.icon className="h-[6rem] w-[6rem] stroke-1 text-primaryColor" />
                </div>

                <div className="flex flex-col gap-[.5rem] text-center sm:text-left">
                  <h3 className="text-[2rem] font-semibold leading-[3rem] tracking-[-0.36px] text-blackColor">
                    {item.title}
                  </h3>

                  <p className="text-[1.4rem] font-medium leading-[3rem] text-blackColor lg:max-w-[40rem]">
                    {item.subTitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions_Sec;
