import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // Autoplay module styles

// Import Swiper required modules directly in the Swiper component
import { Autoplay } from "swiper/modules";

const Infinite_Carousel = () => {
  return (
    <Swiper
      spaceBetween={30} // Adjust the space between slides
      slidesPerView={1} // Number of slides to show at a time
      loop={true} // Infinite loop
      speed={1}
      autoplay={{
        delay: 0, // Auto slide delay in ms
        disableOnInteraction: false, // Keeps autoplay after interaction
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>

      <SwiperSlide>Slide 2</SwiperSlide>

      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default Infinite_Carousel;
