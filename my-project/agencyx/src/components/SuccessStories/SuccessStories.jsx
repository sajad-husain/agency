"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import {FaAngleRight} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../SuccessStories/SuccessBgStars.css';
import ShootingStars from './ShootingStars';
import './ShootingStars.css';
import  successStoriesText  from './successStoriesText';


export default function SuccessStories({lang}) {
  const swiperRef = useRef(null);
  return (
    
        <section
      className="SuccessBgEffect bg-black w-full flex flex-col items-center justify-center px-2 md:px-4 lg:px-12 py-8 md:py-12 xl:py-24 gap-2 sm:gap-4 md:gap-6 lg:gap-12"
    >
      {/* ShootingStars arka plan efekti */}
      <ShootingStars />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent">
        {successStoriesText.title[lang]}
      </h2>
      <div className="w-full max-w-7xl  relative flex items-center justify-center pb-12 px-1">
        {/* Prev Button */}
        <button
          type="button"
          aria-label="Previous"
          className="custom-prev flex absolute left-4 box-shadow-lg bg-transparent text-transparent top-1/3 -translate-y-1/2  z-10 w-10 h-10 rounded-full border items-center justify-center  transition" 
        >
          <FaChevronLeft className="text-xl text-[#477BFF]" size={24} />
        </button>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
          breakpoints={
            {
            0:{
              spaceBetween: 50,
            },
            1024:{
              slidesPerView: 2, spaceBetween: -100,
            },
          }
          }
          pagination={{ clickable: true, dynamicBullets: true, el: '.custom-success-pagination' }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          className="w-full"
        >
          {successStoriesText.stories.map((story, idx) => (
            <SwiperSlide
  key={idx}
  className="flex items-center justify-center rounded-2xl"
>              <div className=" flex flex-col w-3/4  md:max-w-[560px] h-[600px] sm:h-[500px] rounded-2xl bg-[rgba(0,0,0,0.01)] border border-[#23252C] shadow-lg p-6 relative mx-auto backdrop-blur-sm" style={{boxShadow: '0 2px 12px 0 rgba(63,105,255,0.10), inset 0 8px 32px 0 rgba(255,255,255,0.08)'}}>
                <div className="text-[17px] md:text-lg text-white font-normal mb-4 tracking-tight">{story.title[lang]}</div>
                <div className="w-full h-[170px] md:h-[160px] rounded-xl overflow-hidden mb-5">
                  <img src={story.image} alt={story.title[lang]} className="object-cover w-full h-full" />
                </div>
                <div className="flex items-center gap-6 mb-2">
                  <div>
                    <div className="text-xs text-gray-400 font-light">{lang === "en" ? "Before" : "Önce"}</div>
                    <div className="text-[13px] font-normal text-red-400">{story.before[lang]}</div>
                  </div>
                  <span className="bg-gray-800 rounded-sm w-7 h-7 flex items-center justify-center"><FaArrowRight className="text-[#7B8EF9] text-base" /></span>
                  <div>
                    <div className="text-xs text-gray-400 font-light">{lang === "en" ? "After" : "Sonra"}</div>
                    <div className="text-[13px] font-normal text-green-400">{story.after[lang]}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-light mb-4 min-h-[40px]">{story.description[lang]}</div>
                <div className="flex flex-wrap items-center gap-2 mb-7">
                  <span className="text-xs text-gray-400 mr-2 font-light">Tools used:</span>
                  {(story.tools && Array.isArray(story.tools[lang]) ? story.tools[lang] : []).map(tool => (
                    <span key={tool} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.10)] text-xs text-gray-200 border border-[#2C3140] font-normal">
                      <span className="p-1 rounded-full border-1 border-blue-500"><FaAnglesRight className="text-blue-500 text-lg rounded-full" size={10}/></span> {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={story.link}
                  className="mt-auto w-full sm:w-1/2 flex items-center justify-center gap-2 rounded-xl px-0 py-4 h-[46px] bg-blue-600 hover:bg-blue-500 transition shadow-none text-[#fff]"
                  style={{boxShadow:'0 2px 12px 0 rgba(63,105,255,0.10)'}}
                >
                  <button className="flex items-center justify-center text-center gap-2 w-full h-full text-xs sm:text-sm font-medium">
                    {story.button[lang]} <FaAngleRight  className="ml-1 text-[16px] " />
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Next Button */}
        <button
          type="button"
          aria-label="Next"
          className="custom-next flex absolute right-4 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center hover:bg-[#23252C] transition text-transparent bg-transparent" 
        >
          <FaChevronRight className="text-xl text-[#477BFF]" size={24} />
        </button>
        {/* Custom Swiper Pagination */}
        <div className="custom-success-pagination absolute left-0 right-0 bottom-0 flex items-center justify-center pb-2 z-20" />
      </div>
    </section>
  );
}