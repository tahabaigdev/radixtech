import { insightsData } from "../../constants";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Insights_Sec = () => {
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

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
    <section id="insights" className="overflow-x-hidden bg-whiteColor">
      <div className="container py-[6rem]">
        {/* Heading Section */}
        <div className="flex items-start justify-center gap-[8rem] xl:justify-between">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-[100rem] text-center xl:text-left"
          >
            <Common_Heading
              title="Keep up with the latest updates, insights, and industry trends while you're on the go!"
              subTitle="Insights"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </motion.div>
        </div>

        {/* Insights Data Section */}
        <div className="mx-auto mt-[4rem] grid grid-cols-1 gap-[4rem] sm:grid-cols-2">
          {insightsData.map((item, index) => {
            // Set up `useInView` for each column
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            // Use left or right variant depending on column index
            const variants =
              index % 2 === 0 ? leftColumnVariants : rightColumnVariants;

            return (
              <motion.a
                ref={ref}
                key={item.id}
                href={item.link}
                className="group"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-[1rem]">
                  <div className="aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] shadow-shadow2">
                    <img
                      src={item.imgUrl}
                      alt="Blog Image"
                      className="h-[100%] w-[100%] object-cover object-center transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="flex flex-col gap-[.5rem]">
                    <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                      {item.title}
                    </h4>

                    <p className="text-[1.4rem] font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights_Sec;
