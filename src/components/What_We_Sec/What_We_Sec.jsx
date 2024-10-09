import { whatWeData } from "../../constants";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const What_We_Sec = () => {
  // Animation variant for fade in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Set up `useInView` for Common_Heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#FDD566]">
      <div className="container py-[8rem] xl:py-[10rem]">
        <div className="flex items-start justify-between gap-[8rem]">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-[100rem]"
          >
            <Common_Heading
              title="We offer software solutions, data analysis, mapping, management support, and training."
              subTitle="What We Do"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </motion.div>
        </div>

        <div className="mt-[8rem] flex flex-col gap-[4rem]">
          {whatWeData.map((item, index) => {
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
                className="flex flex-col items-center gap-[4rem] border-b border-solid border-blackColor pb-[4rem] sm:flex-row"
              >
                <div>
                  <item.icon className="h-[8rem] w-[8rem] stroke-1" />
                </div>

                <div className="flex flex-col gap-[1rem] text-center sm:text-left">
                  <h3 className="text-[3.6rem] font-semibold leading-[4.32rem] tracking-[-0.36px] text-blackColor">
                    {item.title}
                  </h3>

                  <p className="text-[1.8rem] font-medium leading-[3.24rem] text-blackColor">
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

export default What_We_Sec;
