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
    <section className="overflow-x-hidden bg-whiteColor">
      <div className="container py-[8rem] xl:py-[10rem]">
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
              title="Check out our latest news while you're on the go!"
              subTitle="Latest Insights"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </motion.div>
        </div>

        {/* Insights Data Section */}
        <div className="mx-auto mt-[4rem] grid max-w-[115rem] grid-cols-1 gap-[4rem] sm:grid-cols-2">
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
                href="#"
                className="group"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-[1rem]">
                  <div className="aspect-[1.5/1] overflow-hidden rounded-[1.2rem]">
                    <img
                      src={item.imgUrl}
                      alt="Blog Image"
                      className="h-[100%] w-[100%] object-cover object-center transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="flex flex-col gap-[1rem]">
                    <div className="flex items-center gap-[1rem] text-textPrimary">
                      <span className="text-[1.2rem] font-semibold uppercase leading-[1.56rem] tracking-[0.4px]">
                        {item.category}
                      </span>
                      <div className="h-[.6rem] w-[.6rem] bg-[#FCB900]"></div>
                      <span className="text-[1.4rem] font-medium leading-[2.24rem]">
                        {item.date}
                      </span>
                    </div>

                    <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                      {item.title}
                    </h4>
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
