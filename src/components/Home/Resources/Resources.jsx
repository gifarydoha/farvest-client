"use client";
import React, { createContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./Resources.css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import sixTips from "../../../../public/images/resources/6-tips-dry-rice-grains.jpg";
import fourTips from "../../../../public/images/resources/avoid-mold-growth.jpg";
import riceWeevils from "../../../../public/images/resources/Rice-Weevil.jpeg";
import benifits from "../../../../public/images/resources/benefits-of-a-good-storage-system.webp";

const projectsData = [
  {
    image: sixTips,
    title: "Six Tips on How to Dry Grains: A Basic Guide",
    subtitle:
      "Drying grains has been part of agricultural traditions for thousands of years. This ensures that crops are preserved so even if it&apos;s not the harvesting season, people will still have food.",
  },
  {
    image: riceWeevils,
    title: "How to Prevent Rice Weevils in Commodities",
    subtitle:
      "Insect infestations in stored agricultural commodities can bring irreparable damage, resulting in billions of dollars in post-harvest losses every year.",
  },
  {
    image: fourTips,
    title: "4 Tips to Avoid Mold Growth in Stored Grains",
    subtitle:
      "Mold growth in dried food such as grains, maize, or rice is not an appetizing sight. Farmers and handlers detest mold because it means their products are tainted and this results in a loss in their profits.",
  },
  {
    image: benifits,
    title: "Benefits of a Good Storage System for Rice Grains",
    subtitle:
      "Rice grains such as wheat are a great source of energy and nutrients like carbohydrates, protein, vitamin E, B vitamins, magnesium and zinc.",
  },
];

const Resources = () => {
  return (
    <section>
      <div className="mx-auto px-5 py-20 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
        {/*  */}
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="font-title text-4xl font-semibold text-gray-900 dark:text-white">
            Read latest guides
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Stay Informed with Farvest&apos;s Latest Insights on Post-Harvest
            Techniques and Best Practices
          </p>
        </div>
        {/* swiper */}
        <Swiper
          loop={true}
          freeMode={true}
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{
            delay: 5500,
            disableOnInteraction: true,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Keyboard, Autoplay]}
          className="swiper3 container"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <ul className="relative flex w-full overflow-hidden p-0">
            {projectsData.map((items, index) => (
              <SwiperSlide
                key={index}
                className="group relative flex items-center justify-center overflow-hidden rounded-xl duration-300 ease-in"
              >
                <Link href="#">
                  <div className="group relative space-y-6  overflow-hidden rounded-3xl">
                    <Image
                      className="ransition mx-auto h-[36rem] lg:h-[40rem] w-full object-cover object-center grayscale duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      src={items?.image}
                      alt="team"
                      loading="lazy"
                      width="640"
                      height="805"
                    />
                    <div className="absolute inset-x-0 bottom-0 mt-auto h-max translate-y-24 bg-green-900 px-8 py-6 transition delay-300 duration-300 ease-in-out group-hover:translate-y-0 dark:bg-white">
                      <div>
                        <h4 className="font-title font-semibold text-white dark:text-gray-700 text-sm sm:text-lg xl:text-xl">
                          {items?.title}
                        </h4>
                        <span className="block text-sm text-gray-400 lg:hidden">
                          {items?.subtitle.substring(0, 45)}...
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 hidden lg:block xl:hidden">
                          {items?.subtitle.substring(0, 60)}...
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 hidden xl:block">
                          {items?.subtitle.substring(0, 80)}...
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </ul>
          <div className="absolute top-[48%] z-10 flex w-full cursor-pointer justify-between">
            <button className="swiper-button-next -m-3 rounded bg-[#101010] px-3 py-10 hover:bg-black"></button>
            <button className="swiper-button-prev -m-3 rounded bg-[#101010] px-3 py-10 hover:bg-black"></button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Resources;
