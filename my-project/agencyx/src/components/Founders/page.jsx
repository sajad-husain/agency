  "use client";

  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from 'swiper/modules';
  import { FaLinkedin, FaInstagram, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import "swiper/css";
  import foundersText  from "./foundersTexts";


  export default function Founders( {lang}  ) {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
          <h2 className="text-center text-lg md:text-xl font-extralight text-gray-500 mb-4">
            {foundersText.title[lang]}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
          {(foundersText.subtitle[lang] || foundersText.subtitle.en).split('\n').map((line, i) => (
            <span key={i}>{line}<br/></span>
          ))}
          </h3>
          <div className="relative flex items-center">
          <button className="custom-prev flex absolute left-2 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border items-center justify-center transition lg:hidden">
    <FaChevronLeft className="text-[#477BFF]" size={24} />
  </button>
        <button className="custom-next flex absolute right-4 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition lg:hidden">
    <FaChevronRight className="text-[#477BFF]" size={24}/>
  </button>
            <Swiper
              spaceBetween={8}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next'
              }}
              modules={[Navigation]}
            >
              {foundersText.cards.map((founder, idx) => {
                // Farklı renkler için sınıflar
                const borderClasses = [
                  "hover:border-green-500 hover:shadow-[rgba(74,222,128,0.8)] ",
                  "hover:border-blue-500 hover:shadow-[rgba(97,197,243,0.8)]",
                  "hover:border-yellow-500 hover:shadow-[rgba(255,215,0,0.8)]",
                  "hover:border-purple-500 hover:shadow-[rgba(128,0,128,0.8)]"
                ];
                const colorIndex = idx % borderClasses.length;
                
                return (
                  <SwiperSlide key={founder.name} className="mx-0">
                    <div className="group flex flex-col items-center">
                      {/* Kart */}
                      <div
                        className={`founder-card founder-card-${['green','blue','yellow','purple'][colorIndex]} flex flex-col justify-between mt-12 w-64 h-72 md:w-[200px] md:h-80 rounded-2xl border border-[#23252C] relative mx-auto bg-cover bg-center overflow-hidden cursor-pointer transition-all duration-300 active:shadow-2xl hover:shadow-2xl ${borderClasses[colorIndex]} group-hover:scale-105`}
                        style={{
    backgroundImage: `url(${founder.image})`
  }}
                      >
                        {/* Gradient overlay for better text visibility */}
                        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black/90 to-transparent z-0"></div>
                        {/* Social Icons */}
                        <div className="absolute top-3 left-3 z-10 flex gap-2">
                          {founder.linkedin && (
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                              <FaLinkedin size={16} />
                            </a>
                          )}
                          {founder.instagram && (
                            <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                              <FaInstagram size={16} />
                            </a>
                          )}
                          {founder.github && (
                            <a href={founder.github} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 transform hover:scale-110">
                              <FaGithub size={16} />
                            </a>
                          )}
                        </div>
  {/* Info */}
  <div className="flex-1 flex flex-col justify-end z-10 p-2 md:p-2 pb-4 md:pb-6 pointer-events-none">
    <div className="text-white text-[18px] text-nowrap font-light mb-1 drop-shadow-lg">{founder.name}</div>
    <div className="text-sm text-gray-300 font-extralight mb-2 drop-shadow">{founder.title[lang] || founder.title.en}</div>
  </div>
                      </div>
                      
                      {/* Açıklama */}
                      <div className="w-full mt-4 transition-all duration-300 transform group-hover:scale-105">
                        <div className="text-sm text-center font-light min-h-[32px] max-w-[180px] mx-auto text-gray-500 group-hover:text-white">
                          {founder.desc[lang] || founder.desc.en}
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              );
            })}
            </Swiper>
            
          </div>
        </div>
      </section>
    );
  }