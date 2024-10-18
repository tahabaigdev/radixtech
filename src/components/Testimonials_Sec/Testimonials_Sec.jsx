import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { testimonialsData } from "../../constants";

const Testimonials_Sec = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className="overflow-x-hidden bg-tertiaryColor">
      <div className="container py-[6rem]">
        <div className="text-center sm:text-left">
          <Common_Heading
            title="Client Voices: What Our Customers Have to Say"
            subTitle="Testimonials"
            titleColor="#000000"
            subTitleColor="#4F4F4F"
          />
        </div>

        <div className="relative mt-[4rem]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onReachEnd={() => setIsEnd(true)}
            onReachBeginning={() => setIsBeginning(true)}
            onFromEdge={() => {
              setIsEnd(false);
              setIsBeginning(false);
            }}
            slidesPerView={3}
            spaceBetween={40}
            modules={[Navigation]}
            allowTouchMove={false}
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

          <div
            ref={prevRef}
            aria-label="Previous Slide"
            tabIndex="0"
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

          <div
            ref={nextRef}
            aria-label="Next Slide"
            tabIndex="0"
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
