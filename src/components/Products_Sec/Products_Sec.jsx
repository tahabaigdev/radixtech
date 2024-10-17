import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import {
  misAccordionData,
  mealAccordionData,
  brsAccordionData,
  cashAccordionData,
  dataHubAccordionData,
} from "../../constants";
import Accordion3 from "../Accordion/Accordion3";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import Mis from "../../assets/images/mis.gif";
import Meal from "../../assets/images/meal.gif";
import DataHub from "../../assets/images/data-hub.gif";
import Brs from "../../assets/images/brs.gif";
import Cash from "../../assets/images/cash.gif";
import LazyLoad from "react-lazyload";

const Products_Sec = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Default: first accordion open
  const [activeIndex, setActiveIndex] = useState(0); // Default: first tab active
  const swiperRef = useRef(null);

  // Animation controls
  const controlsLeft = useAnimation(); // For accordion animation
  const controlsRight = useAnimation(); // For swiper animation
  const { ref: accordionRef, inView: accordionInView } = useInView({
    threshold: 0.2, // Accordion triggers when 20% visible
  });
  const { ref: swiperRefInView, inView: swiperInView } = useInView({
    threshold: 0.2, // Swiper triggers when 20% visible
  });

  // Start the animations when they come into view
  useEffect(() => {
    if (accordionInView) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (swiperInView) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [accordionInView, swiperInView, controlsLeft, controlsRight]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setActiveAccordion(0);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const getAccordionData = (index) => {
    switch (index) {
      case 0:
        return misAccordionData;
      case 1:
        return mealAccordionData;
      case 2:
        return brsAccordionData;
      case 3:
        return cashAccordionData;
      case 4:
        return dataHubAccordionData;
      default:
        return [];
    }
  };

  return (
    <section id="platform" className="overflow-x-hidden">
      <div className="container py-[6rem]">
        <div className="flex items-start justify-center gap-[8rem] xl:justify-between">
          <div className="max-w-[100rem] text-center xl:text-left">
            <Common_Heading
              title="Each platform simplifies a complex process and empowers people."
              subTitle="Products"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mt-[4rem] grid grid-cols-1 items-center gap-[2rem]">
          <div>
            <ul className="mb-[2rem] flex flex-wrap items-center justify-center gap-[10px]">
              {[
                "Management Information System (MIS)",
                "Monitoring & Evaluation (M&E) / MEAL System",
                "Beneficiary Registration System",
                "Cash and Humanitarian Aid Distribution System",
                "DataHub",
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleButtonClick(idx)}
                    className={`inline-flex h-[4rem] min-w-[4.7rem] items-center justify-center rounded-[2rem] px-[1.6rem] py-[1.2rem] text-[1.6rem] font-medium leading-[2.4rem] text-blackColor transition-colors duration-200 ${
                      activeIndex === idx
                        ? "bg-primaryColor text-whiteColor"
                        : "bg-[#eeede9] hover:bg-whiteColor"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-[4rem] md:grid-cols-2">
            {/* Left Reveal Animation for Accordion */}
            <motion.div
              ref={accordionRef} // Track accordion visibility
              initial={{ x: -100, opacity: 0 }} // Start hidden to the left
              animate={controlsLeft}
              transition={{ duration: 0.7 }}
              className="order-[-1]"
            >
              {getAccordionData(activeIndex).map((item, idx) => (
                <Accordion3
                  key={idx}
                  title={item.title}
                  list={item.list}
                  isActive={activeAccordion === idx}
                  onClick={() => handleAccordionClick(idx)}
                />
              ))}
            </motion.div>

            {/* Right Reveal Animation for Swiper */}
            <motion.div
              ref={swiperRefInView} // Track swiper visibility
              initial={{ x: 100, opacity: 0 }} // Start hidden to the right
              animate={controlsRight}
              transition={{ duration: 0.7 }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                allowTouchMove={false}
                className="mySwiper"
              >
                {[Mis, Meal, Brs, Cash, DataHub].map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <LazyLoad className="flex justify-center">
                      <img
                        src={slide}
                        alt={`Products Slide ${idx + 1}`}
                        className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center"
                      />
                    </LazyLoad>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products_Sec;
