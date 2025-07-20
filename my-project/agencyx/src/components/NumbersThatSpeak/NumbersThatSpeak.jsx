import React from 'react'
import './NumbersThatSpeakCardEffect.css'
import { numbersText } from './numbersText';


const page = ({ lang }) => {
  const numbersThatSpeak = numbersText;
  return (
    <section className="hero-bg flex flex-col items-center justify-center overflow-hidden py-2 md:py-4 lg:py-12 px-2 md:px-4 bg-black relative gap-4 md:gap-8">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>

        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

        <div className="star"></div>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent">
        {numbersThatSpeak.title[lang]}
      </h2>
      <div className="flex flex-col md:flex-row gap-7 w-full max-w-5xl justify-center items-stretch px-2 ">
        {numbersThatSpeak.cards.map((card, idx) => (
          <div
            key={idx}
            className="card bg-amber-400 border border-[#232732] rounded-xl px-2 flex items-center justify-start gap-3 shadow mx-auto hover:scale-105 transition-all duration-400"
          >
            <div className="flex items-center justify-center bg-transparent rounded-lg w-16 h-16 min-w-8">
              {card.icon && <card.icon size={48} />}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xl font-semibold text-white mb-1"> {card.value}       </div>
              <div className="text-base text-white/60">{card.label[lang]}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page