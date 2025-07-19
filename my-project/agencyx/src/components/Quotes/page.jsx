"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import quotesText from './quotesText';

export default function QuotesCarousel({ lang = 'en' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  const quotes = quotesText.quotes;
  return (
    <section className="bg-w-full bg-black px-2 md:px-4 lg:px-12 py-8 md:py-12 xl:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="quotes-swiper"
        >
          {quotes.map((quote, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center px-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-100 leading-relaxed">
                  “{quote.text[lang]}”
                </p>
                <div className="mt-8 pb-12">
                  <p className="text-base md:text-lg font-semibold text-white">{quote.author}</p>
                  <p className="text-xs md:text-base text-blue-300">{quote.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
