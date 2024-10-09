import { ArrowUpRight } from "lucide-react";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { portfolioData } from "../../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Datahub_Sec = () => {
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
    <section className="overflow-x-hidden">
      <div className="container py-[8rem] xl:py-[10rem]">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-start justify-between gap-[4rem] text-center sm:text-left"
        >
          <div>
            <Common_Heading
              title="Data-driven decisions in real time"
              subTitle="Datahub"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="mx-auto mt-[4rem] grid max-w-[115rem] grid-cols-1 gap-[4rem] lg:grid-cols-2">
          {portfolioData.map((item, index) => {
            // Set up `useInView` for each grid item
            const [ref, inView] = useInView({
              triggerOnce: true, // Triggers animation only once
              threshold: 0.1, // 10% of the element needs to be visible to trigger
            });

            return (
              <motion.a
                ref={ref} // Pass the ref to the motion element
                key={item.id}
                href="#"
                className="group"
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animate when in view
                variants={fadeInVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1, // Optional stagger between items
                }}
              >
                <div className="flex flex-col gap-[1rem]">
                  <div className="aspect-[1.5/1] overflow-hidden rounded-[1.2rem]">
                    <img
                      src={item.imgUrl}
                      alt="Portfolio Image"
                      className="h-[100%] w-[100%] transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                        {item.title}
                      </h4>

                      <h5 className="text-[1.2rem] font-semibold uppercase leading-[1.56rem] tracking-[0.4px] text-textPrimary">
                        {item.subTitle}
                      </h5>
                    </div>

                    <div>
                      <ArrowUpRight className="h-[2rem] w-[2rem] transition-all duration-[0.3s] ease-out group-hover:scale-[1.4]" />
                    </div>
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

export default Datahub_Sec;
