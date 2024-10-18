import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import InsightsImage from "../../assets/images/insights.gif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Insights_Sec = () => {
  const controlsLeft = useAnimation(); // For heading animation
  const controlsRight = useAnimation(); // For content blocks animation
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of heading is visible
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of content blocks are visible
  });

  // Start the animations when they come into view
  useEffect(() => {
    if (headingInView) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (contentInView) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [headingInView, contentInView, controlsLeft, controlsRight]);

  return (
    <section id="insights" className="overflow-x-hidden bg-whiteColor">
      <div className="container py-[6rem]">
        {/* Left Reveal Animation for Heading */}
        <motion.div
          ref={headingRef}
          initial={{ x: -100, opacity: 0 }} // Slide in from the left
          animate={controlsLeft}
          transition={{ duration: 0.7 }}
          className="flex items-start justify-center gap-[8rem] xl:justify-between"
        >
          <div className="max-w-[100rem] text-center xl:text-left">
            <Common_Heading
              title="Keep up with the latest updates, insights, and industry trends while you're on the go!"
              subTitle="Insights"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </motion.div>

        {/* Right Reveal Animation for Content Blocks */}
        <motion.div
          ref={contentRef}
          initial={{ x: 100, opacity: 0 }} // Slide in from the right
          animate={controlsRight}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-[4rem] grid grid-cols-1 gap-[4rem] sm:grid-cols-2"
        >
          <a
            href="https://www.linkedin.com/company/weareradix"
            target="_blank"
            className="group"
          >
            <div className="flex flex-col gap-[1rem]">
              <div className="aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] shadow-shadow2">
                <iframe
                  className="h-[100%] w-[100%] transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                  src="https://www.youtube.com/embed/videoseries?si=I_WXHoYoB3S8Tixw&amp;list=PLgb9798Mo2GeH9SeMBCRWJhgLMWYKp2Yy"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex flex-col gap-[.5rem]">
                <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                  Podcast
                </h4>

                <p className="text-[1.4rem] font-normal">
                  Data-Driven Dialogues" podcast offer guidance on navigating
                  the complexities of data, technology, and digital
                  transformation. Provides valuable advice, inspiring case
                  studies, and practical coaching sessions.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/weareradix"
            target="_blank"
            className="group"
          >
            <div className="flex flex-col gap-[1rem]">
              <div className="aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] shadow-shadow2">
                <img
                  src={InsightsImage}
                  alt="Blog Image"
                  className="h-[100%] w-[100%] object-cover object-center transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[.5rem]">
                <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                  Insights
                </h4>

                <p className="text-[1.4rem] font-normal">
                  We cover pertinent questions, provides practical advice and
                  strategies to navigate data, technology, and digital
                  transformation, helping professionals unlock innovative
                  solutions.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights_Sec;
