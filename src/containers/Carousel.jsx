import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import sliderSettings from "../utils/swiper/sliderSettings";
import carouselConstants from "../utils/swiper/carouselConstants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="sm:mt-5"
      {...sliderSettings}
    >
      <SliderButtons />
      {carouselConstants.map((item, i) => (
        <SwiperSlide
          className="flex sm:flex-row flex-col justify-evenly items-center p-3 h-[80vh]"
          key={i + 1 + "+!+"}
          style={{ background: item.background }}
        >
          <img
            src={item.image}
            className="w-60 lg:w-auto"
            alt="carousel-image"
          />

          <div className="flex flex-col text-center">
            <h2 className="sm:text-4xl text-2xl font-bold uppercase">
              {item.title}
            </h2>
            <p
              className="font-semibold text-white tracking-wide"
              style={{ color: item.color }}
            >
              {item.description}
            </p>
            <button className="border-2 w-1/4 self-center my-5 font-bold text-sm sm:text-base p-1 hover:border-white hover:bg-white active:scale-105">
              SHOW NOW
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full justify-between items-center p-3 h-[10vh] mt-1">
      <button
        className="border-2 rounded-full w-10 h-10 flex justify-center items-center font-bold hover:bg-black hover:text-white active:scale-105"
        onClick={() => swiper.slidePrev()}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        className="border-2 rounded-full w-10 h-10 flex justify-center items-center font-bold hover:bg-black hover:text-white active:scale-105"
        onClick={() => swiper.slideNext()}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
