import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import { slideContentData } from "../../constants";

// Data for tabs and slides
const TAB_DATA = [
  "Data Services",
  "Reporting Services",
  "Information & Communication Technology for Development (ICT4D)",
  "Capacity Building",
  "Geographic Information Systems (GIS)",
  "Advanced Machine Learning",
  "Data Maturity Assessment",
];

const Filter_Tab_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Animation controls
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const { ref: tabsRef, inView: tabsInView } = useInView({
    threshold: 0.2, // Trigger animation when 20% visible
  });
  const { ref: swiperRefInView, inView: swiperInView } = useInView({
    threshold: 0.2,
  });

  // Start the animations when they come into view
  useEffect(() => {
    if (tabsInView) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (swiperInView) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [tabsInView, swiperInView, controlsLeft, controlsRight]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div>
      {/* Tabs Section with Left Reveal Animation */}
      <motion.ul
        ref={tabsRef}
        initial={{ x: -100, opacity: 0 }}
        animate={controlsLeft}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-[1.6rem]"
      >
        {TAB_DATA.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleButtonClick(idx)}
              className={`inline-flex min-h-[4rem] min-w-[4.7rem] items-center justify-center rounded-[2rem] px-[1.6rem] py-[1.2rem] text-[1.6rem] font-medium leading-[2.4rem] text-blackColor transition-colors duration-200 ${
                activeIndex === idx
                  ? "bg-primaryColor text-whiteColor"
                  : "bg-[#eeede9] hover:bg-whiteColor"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </motion.ul>

      {/* Swiper Section with Right Reveal Animation */}
      <motion.div
        ref={swiperRefInView}
        initial={{ x: 100, opacity: 0 }}
        animate={controlsRight}
        transition={{ duration: 0.7 }}
        className="mt-[6rem]"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          allowTouchMove={false} // Disable touch sliding
          className="mySwiper"
        >
          {slideContentData.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 items-center gap-[2rem] xl:grid-cols-2 xl:gap-[0rem]">
                {/* Image Section */}
                <div className="flex justify-center overflow-hidden xl:aspect-[1.7/1] xl:justify-start">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={slide.imgSrc}
                    alt={`Services Slide ${idx + 1}`}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                  <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                    {slide.title}
                  </h4>

                  <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Filter_Tab_1;
