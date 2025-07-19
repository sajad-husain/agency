import Image from "next/image";
import HeroImage from "../../public/HeroImage.png";
import { CiMicrophoneOn } from "react-icons/ci";
import "./HeroButtonEffect.css";
import "./StarBackground.css";
import MatrixRainEffect from "./MatrixRainEffect";
import { heroTexts } from "./heroTexts";

export default function Hero({ lang, texts = heroTexts }) {
  return (
    <section className="bg-black" id="home">
      
      <MatrixRainEffect />
      
      {/* Hero Section */}
      <div className="hero-bg flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-10 px-4 bg-black relative gap-12">
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
        </div>
        {/* Badge */}
        <div className=" flex flex-col items-center gap-9">
        <div className="heroButtonEffect rounded-full" style={{display:'inline-flex'}}>
  <button className="heroButtonEffect relative overflow-hidden flex flex-row flex-nowrap items-center border rounded-full px-1 py-0.5 md:px-0.5 md:py-0.5 border-[#313233] bg-gray-950 cursor-pointer hover:scale-105 transition-all duration-400 gap-2 md:gap-4">
  <div className="bg-black  w-full h-full rounded-full flex items-center justify-center px-4 py-2">
  <CiMicrophoneOn className="bg-blue-500 rounded-full min-w-5 min-h-5 w-5 h-5 md:w-8 md:h-8 z-10" />
    <span className="relative z-10 inline-block px-2 py-0.5 md:px-4 md:py-1 rounded-full text-white font-extralight text-sm md:text-lg shadow">
      { texts.audiexButton[lang]}
    </span>
  </div>
  </button>
</div>
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-4 z-10">
            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center text-white leading-tight mb-4" >
              {texts.title1[lang]}
              <br />
              {texts.title2[lang]}
            </h1>
            {/* Description */}
            <p className="max-w-2xl text-center text-gray-200 text-xs px-2 md:text-xl font-extralight">
              {texts.subtitle[lang]}
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center">
        

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-12 w-full h px-4">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a
                href="#demo"
                className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300 text-base hover:scale-105"
              >
                {texts.buttons.tryDemo[lang]}
              </a>
              <a
                href="#schedule"
                className="px-7 py-3 bg-gray-800/90 text-white rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 text-base hover:scale-105"
              >
                {texts.buttons.scheduleDemo[lang]}
              </a>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-4xl mx-auto sm:[box-shadow:_0px_-80px_75px_-75px_rgba(34,18,133,0.8),30px_-20_30px_-5px_rgba(157,18,164,0.5)] rounded-2xl">
              
              <Image
                src={HeroImage}
                alt="Dashboard Mockup"
                width={1200}
                height={500}
                className="relative z-10 w-full h-auto rounded-2xl border-t border-l border-r border-[rgba(53,51,116,0.8)] hover:scale-102 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
