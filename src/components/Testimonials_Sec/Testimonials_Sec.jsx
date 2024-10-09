import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { testimonialsData } from "../../constants";

const Testimonials_Sec = () => {
  // Create refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Create a ref for Swiper
  const [isBeginning, setIsBeginning] = useState(true); // Track if it's the first slide
  const [isEnd, setIsEnd] = useState(false); // Track if it's the last slide

  return (
    <section>
      <div className="container py-[8rem] xl:py-[10rem]">
        <div>
          <Common_Heading
            title="Client Voices: What Our Customers Have to Say"
            subTitle="Testimonials"
            titleColor="#000000"
            subTitleColor="#4F4F4F"
          />
        </div>

        <div className="relative mt-[4rem]">
          {/* Swiper component */}
          <Swiper
            onInit={(swiper) => {
              // Save the swiper instance to the ref
              swiperRef.current = swiper;

              // Assign refs to swiper navigation buttons
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              // Update swiper navigation
              swiper.navigation.init();
              swiper.navigation.update();

              // Check initial state
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              // Update the button visibility when the slide changes
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            slidesPerView={3}
            spaceBetween={40}
            modules={[Navigation]}
            allowTouchMove={false} // Disable swiping/touch interactions
            slideToClickedSlide={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex h-[100%] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-solid border-[#e9e2da] bg-whiteColor p-[3rem]">
                  <p className="text-[1.8rem] font-medium leading-[3.24rem] text-textPrimary">
                    {item.message}
                  </p>

                  <div className="mt-[2rem] flex items-center gap-[2rem]">
                    <div className="h-[4.8rem] min-w-[4.8rem] overflow-hidden rounded-[50%]">
                      <img
                        src={item.imgUrl}
                        alt="Testimonials Image"
                        className="h-[100%] w-[100%] object-cover"
                      />
                    </div>

                    <div>
                      <h5 className="text-[1.6rem] font-semibold leading-[2.4rem] text-blackColor">
                        {item.title}
                      </h5>

                      <h6 className="text-[1.4rem] font-medium leading-[2.24rem] text-textPrimary">
                        {item.subTitle}
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          {/* Prev button - hidden when on the first slide */}
          <div
            ref={prevRef}
            className={`custom-prev absolute left-[1rem] top-1/2 z-10 inline-flex min-h-[4.4rem] min-w-[4.4rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[50%] bg-primaryColor transition-all duration-[0.1s] active:scale-[0.9] ${
              isBeginning
                ? "pointer-events-none opacity-0"
                : "opacity-1 pointer-events-auto"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path
                fill="transparent"
                stroke="hsl(0, 0%, 100%)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22.5 12.5 15 20l7.5 7.5"
              ></path>
            </svg>
          </div>

          {/* Next button - hidden when on the last slide */}
          <div
            ref={nextRef}
            className={`custom-next absolute right-[1rem] top-1/2 z-10 inline-flex min-h-[4.4rem] min-w-[4.4rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[50%] bg-primaryColor transition-all duration-[0.1s] active:scale-[0.9] ${
              isEnd
                ? "pointer-events-none opacity-0"
                : "opacity-1 pointer-events-auto"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path
                fill="transparent"
                stroke="hsl(0, 0%, 100%)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12.5 25 20l-7.5 7.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials_Sec;
