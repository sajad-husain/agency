import React from "react";
import { FiUsers, FiGift, FiBookOpen, FiCreditCard } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";
import { CgScreen } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import { LiaWrenchSolid } from "react-icons/lia";
import "./DataTools.css";
import dataToolsText from "./DataToolsText";

const DataTools = ({lang}) => {
  return (
    <section id="how" className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 md:px-4 lg:px-12 py-8 md:py-12 xl:py-24 relative gap-2 sm:gap-4 md:gap-6 lg:gap-12 bg-black">
      <div className=" absolute inset-0 w-full z-0 pointer-events-none">

      </div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-4 bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent"
      >
        {dataToolsText.title[lang]}
      </h2>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  grid-rows-1 lg:grid-rows-2 gap-4">
        {/* AI Agents Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl p-5 flex flex-col lg:col-span-2 lg:row-span-2 min-h-[220px] lg:min-h-[280px] min-w-[180px] lg:min-w-[340px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.1)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[0].title[lang]}</span>
            <FiUsers className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20 group-hover:text-white">{dataToolsText.cards[0].description[lang]}</span>
          <div className="flex flex-col gap-2 mt-4 relative z-20">
            <button className="w-fit flex items-center gap-2 bg-black hover:bg-blue-300/10 transition rounded-lg pl-4 pr-16 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
            <button className="w-fit flex items-center gap-2 bg-black hover:bg-blue-300/10 transition rounded-lg pl-4 pr-16 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
            <button className="w-fit flex items-center gap-2 bg-black hover:bg-blue-300/10 transition rounded-lg pl-4 pr-16 py-2 text-xs text-left text-gray-200 shadow-[inset_0_2px_8px_0_rgba(156,163,175,0.35)]">
              <TbUsersPlus  className="text-gray-400" /> Assign to Jordan Blake <span className="ml-2"><span className="rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_6px_2px_rgba(250,204,21,0.7)] bg-white"><img src="/avatar.png" alt="" className="w-5 h-5 rounded-full" /></span></span>
            </button>
          </div>
        </div>
        {/* CRM Dashboard Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-1 lg:row-span-2 min-h-[180px] lg:min-h-[280px] min-w-[160px] lg:min-w-[220px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[1].title[lang]}</span>
            <CgScreen  className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20 group-hover:text-white">{dataToolsText.cards[1].description[lang]}</span>
        </div>
        {/* Loyalty Engine Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-1 lg:row-span-2 min-h-[180px] lg:min-h-[280px] min-w-[160px] lg:min-w-[220px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-lg font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[2].title[lang]}</span>
            <FiGift className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-sm text-gray-400 mb-2 block relative z-20 group-hover:text-white">{dataToolsText.cards[2].description[lang]}</span>
        </div>
        {/* Workflow Builder Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[3].title[lang]}</span>
            <GiSettingsKnobs className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20 group-hover:text-white">{dataToolsText.cards[3].description[lang]}</span>
        </div>
        {/* Knowledge Base Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[4].title[lang]}</span>
            <FiBookOpen className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20 group-hover:text-white">{dataToolsText.cards[4].description[lang]}</span>
        </div>
        {/* Admin Controls Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[5].title[lang]}</span>
            <LiaWrenchSolid  className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20 group-hover:text-white">{dataToolsText.cards[5].description[lang]}</span>
        </div>
        {/* Billing / Access Card */}
        <div className="group bg-transparent border border-[#23252C] hover:border-blue-400/80 transition rounded-2xl shadow-lg p-5 flex flex-col min-h-[120px] min-w-[140px] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-2xl z-10" style={{boxShadow:'inset 0 0 18px 5px rgba(156,163,175,0.12)'}}></div>
          <div className="flex items-center gap-2 mb-2 relative z-20">
            <span className="text-base font-semibold text-gray-100 group-hover:text-blue-400">{dataToolsText.cards[6].title[lang]}</span>
            <FiCreditCard className="text-lg text-gray-300 ml-auto group-hover:text-blue-400" />
          </div>
          <span className="text-xs text-gray-400 mb-1 block relative z-20 group-hover:text-white">{dataToolsText.cards[6].description[lang]}</span>
        </div>
      </div>
    </section>
  );
};

export default DataTools;