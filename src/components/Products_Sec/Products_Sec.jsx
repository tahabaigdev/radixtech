import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

const Products_Sec = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Default: first accordion open
  const [activeIndex, setActiveIndex] = useState(0); // Default: first tab active
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setActiveAccordion(0); // Reset to the first accordion when tab changes
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

          <div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              allowTouchMove={false}
              className="mySwiper"
            >
              {[Mis, Meal, Brs, Cash, DataHub].map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex justify-center">
                    <img
                      src={slide}
                      alt={`Slide ${idx + 1}`}
                      className="h-[50%] w-[50%] rounded-[1.2rem] object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-[2rem]">
          {getAccordionData(activeIndex).map((item, idx) => (
            <Accordion3
              key={idx}
              title={item.title}
              list={item.list}
              isActive={activeAccordion === idx}
              onClick={() => handleAccordionClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products_Sec;
