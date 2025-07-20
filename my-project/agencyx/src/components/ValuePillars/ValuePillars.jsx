"use client"

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../ValuePillars/ValuePillarsSwiper.css';
import { valuePillarsText } from './ValuePillarsText';


const cardData = [
  {
    title: valuePillarsText.cardData[0].title,
    subtitle: valuePillarsText.cardData[0].subtitle,
    description: valuePillarsText.cardData[0].description,
    image: valuePillarsText.cardData[0].image,
  },
  {
    title: valuePillarsText.cardData[1].title,
    subtitle: valuePillarsText.cardData[1].subtitle,
    description: valuePillarsText.cardData[1].description,
    image: valuePillarsText.cardData[1].image,
  },
  {
    title: valuePillarsText.cardData[2].title,
    subtitle: valuePillarsText.cardData[2].subtitle,
    description: valuePillarsText.cardData[2].description,
    image: valuePillarsText.cardData[2].image,
  },
]



const page = ({ lang }) => {
  const swiperRef = useRef(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 md:px-4 lg:px-12 py-8 md:py-12 xl:py-24 relative gap-2 sm:gap-4 md:gap-6 lg:gap-12" >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-4 bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent"
      >
        {valuePillarsText.title[lang]}
      </h2>
      <div className="w-full max-w-lg lg:max-w-7xl relative  min-h-[516px]">

        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            el: '.custom-swiper-pagination',
            clickable: true,
          }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
              pagination: false,
              allowTouchMove: false,
            },
          }}
        >
          {cardData.map((card, idx) => (
            <SwiperSlide key={idx} className="flex Pillarsgroup justify-center">
              <div
                className="flex-1 bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col shadow-sm shadow-gray-800 max-w-xs min-w-[300px] md:max-w-md mx-auto relative overflow-hidden transition-all duration-500 h-[516px] w-[300px] sm:w-[400px]"

              >
                {/* Glow Effect */}
                <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
                    filter: 'blur(4px)',
                  }}
                />
                <div className="mb-6 flex items-center justify-center h-[275px] w-full px-6 z-10 relative">
                  <img src={card.image[lang]} alt={card.title[lang]} className="object-fill h-full w-full" />
                </div>
                <div className="mt-auto flex flex-col w-full items-start gap-8 pl-6 z-10 relative">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{card.title[lang]}</h3>
                    <div className="text-sm text-white/60 mb-2">{card.subtitle[lang]}</div>
                  </div>
                  <div className="text-xs text-white/40">{card.description[lang]}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        {/* Custom pagination dots under the cards */}
        <div className="custom-swiper-pagination flex justify-center mt-6" />
      </div>
    </section>
  )
}

export default page