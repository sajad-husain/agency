import React from 'react'
import Image from 'next/image'
import { IoGitMergeOutline, IoStatsChart } from 'react-icons/io5';
import { GiSpeedometer } from 'react-icons/gi'; 
import { RiChatVoiceAiLine } from 'react-icons/ri'; 
import './ChooseScenario.css';
import chooseScenarioText from './ChooseScenarioText';

const page = ({lang}) => {
  return (
    <section id="about" className="flex flex-col items-center justify-start py-8 md:py-12 xl:py-24 px-1 sm:px-2 md:px-4 bg-black gap-2 sm:gap-4 md:gap-6 lg:gap-12">


      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-4 bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent"
      >
         {chooseScenarioText.title[lang]}
      </h2>
      
      <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row gap-4">
        {/* Sol Kolon */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Hotel Card - 2h */}
          <div className="ScenarioCard bg-gray-950 rounded-2xl shadow-lg p-5 flex flex-col items-start gap-4 h-[320px] border border-[#23252C] hover:border-green-600 relative overflow-hidden hover:scale-101 transition-all duration-300">
            {/* Arka plan görseli */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none" style={{ backgroundImage: "url('/ChooseScenario/cardbackground.png')" }} />
            {/* Koyu overlay */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none select-none" />
            {/* İçerik */}
            <div className="relative z-10 w-full flex flex-col items-start gap-4 h-full">
              <div className="w-8 h-8 flex items-center justify-center bg-[#23252C] rounded-md shadow-xs shadow-green-700">
                {chooseScenarioText.cards[0].icon}
              </div>
              <div className='flex flex-col items-start text-start gap-1'>
                <h3 className="text-lg font-semibold text-white">{chooseScenarioText.cards[0].title[lang]}</h3>
                <p className="text-sm text-gray-400">
                  {chooseScenarioText.cards[0].subtitle[lang]}
                </p>
              </div>
              <div className="flex-grow flex items-center justify-center overflow-hidden w-full">
                <Image
                  src="/ChooseScenario/HotelCard.svg"
                  alt="Hotel Scenario"
                  width={320}
                  height={120}
                  className="object-contain w-full h-full grayscale"
                />
              </div>
            </div>
          </div>

          {/* Boost Productivity Card - h */}
          <div className="ScenarioCard bg-gray-950 rounded-2xl shadow-lg p-5 gap-4 flex flex-col h-[140px] border border-[#23252C] hover:border-green-600 relative overflow-hidden hover:scale-101 transition-all duration-300">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none" style={{ backgroundImage: "url('/ChooseScenario/cardbackground.png')" }} />
            <div className="absolute inset-0 bg-black/30 pointer-events-none select-none" />
            <div className="relative z-10 w-full flex flex-col items-start gap-4 h-full">
              <div className="w-8 h-8 flex items-center justify-center bg-[#23252C] rounded-md shadow-xs shadow-green-700">
                {chooseScenarioText.cards[1].icon}
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h3 className="text-lg font-semibold text-white">{chooseScenarioText.cards[1].title[lang]}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {chooseScenarioText.cards[1].subtitle[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Kolon */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Agency Card - h */}
          <div className="ScenarioCard bg-gray-950 rounded-2xl shadow-lg p-5 gap-4 flex flex-col h-[140px] border border-[#23252C] hover:border-green-600 relative overflow-hidden hover:scale-101 transition-all duration-300">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none" style={{ backgroundImage: "url('/ChooseScenario/cardbackground.png')" }} />
            <div className="absolute inset-0 bg-black/30 pointer-events-none select-none" />
            <div className="relative z-10 w-full flex flex-col items-start gap-4 h-full">
              <div className="w-8 h-8 flex items-center justify-center bg-[#23252C] rounded-md shadow-xs shadow-green-700">
                {chooseScenarioText.cards[2].icon}
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h3 className="text-lg font-semibold text-white">{chooseScenarioText.cards[2].title[lang]}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {chooseScenarioText.cards[2].subtitle[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Finance Card - 2h */}
          <div className="ScenarioCard bg-gray-950 rounded-2xl shadow-lg pt-5 pl-5 pr-5 gap-4 flex flex-col justify-between h-[320px] border border-[#23252C] hover:border-green-600 relative overflow-hidden hover:scale-101 transition-all duration-300">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none" style={{ backgroundImage: "url('/ChooseScenario/cardbackground.png')" }} />
            <div className="absolute inset-0 bg-black/30 pointer-events-none select-none" />
            <div className="relative z-10 w-full flex flex-col items-start gap-4 h-full">
              <div className="w-8 h-8 flex items-center justify-center bg-[#23252C] rounded-md shadow-xs shadow-green-700">
                {chooseScenarioText.cards[3].icon}
              </div>
              <div className='flex flex-col items-start gap-1'>
                <h3 className="text-lg font-semibold text-white">{chooseScenarioText.cards[3].title[lang]}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {chooseScenarioText.cards[3].subtitle[lang]}
                </p>
              </div>
              <div className="flex-grow flex items-end justify-center overflow-hidden w-full pb-2">
                <Image
                  src="/ChooseScenario/FinanceCard.svg"
                  alt="Finance Scenario"
                  width={320}
                  height={120}
                  className="object-contain w-full h-full grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page