import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const banner = [
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
    title: "Fashion",
    href: "",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
    title: "Groceries",
    href: "",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
    title: "Health & Beauty",
    href: "",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Home & Lifestyle",
    href: "",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-5.jpg",
    title: "Mobiles & Tablets",
    href: "",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-6.jpg",
    title: "Automobiles",
    href: "",
  },
];
export default function Banner() {
  return (
    <div className="topGradient">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-[350px] md:h-[450px]  bg-[#EAF4F4]"
      >
        {banner.map((data, index) => {
          return (
            <SwiperSlide key={index} className="h-full relative">
              <img
                width="100%"
                height="100%"
                className="object-cover h-full"
                src={data?.img}
              />
              <h1 className="z-50 text-[30px] text-[#457b9d] absolute bottom-0 right-0 p-8">
                {data?.title}
              </h1>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
