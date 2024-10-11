import React, { useRef, useState } from "react";
import { Check } from "lucide-react";
import UseCaseImg1 from "../../assets/images/use-case-img-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Filter_Tab_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-[1.6rem]">
        {[
          "AI",
          "Governance",
          "Warehousing",
          "ETL",
          "Data Sharing",
          "Orchestration",
        ].map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleButtonClick(idx)}
              className={`inline-flex h-[4rem] min-w-[4.7rem] items-center justify-center rounded-[2rem] px-[1.6rem] py-[1.2rem] text-[1.6rem] font-medium leading-[2.4rem] text-blackColor transition-colors duration-200 ${
                activeIndex === idx
                  ? "text-white bg-primaryColor text-whiteColor"
                  : "bg-[#eeede9] hover:bg-whiteColor"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-[6rem]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Assign Swiper instance to the ref
          }}
          allowTouchMove={false} // Disable touch sliding
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 items-center gap-[4rem] xl:grid-cols-2">
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-[100%] w-[100%] rounded-[1.2rem] object-cover object-center sm:h-[50%] sm:w-[50%] xl:h-[90%] xl:w-[90%]"
                    src={UseCaseImg1}
                    alt="Use Case Image"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
                <h4 className="text-[2.8rem] font-medium leading-[3.6rem] text-blackColor">
                  Build better approach
                </h4>

                <p className="max-w-[60rem] text-[1.6rem] leading-[2.4rem] text-blackColor">
                  Great models are built with great data. With Databricks,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "Create, tune and deploy your own generative AI models",
                    "Automate experiment tracking and governance",
                    "Deploy and monitor models at scale",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-[1rem] text-[1.4rem] text-blackColor sm:text-[1.6rem]"
                    >
                      <Check className="h-[1.4rem] w-[1.4rem] text-primaryColor sm:h-[1.8rem] sm:w-[1.8rem]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Filter_Tab_1;
