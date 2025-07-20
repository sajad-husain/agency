import React from 'react';
import DemoMatrixEffect from './DemoMatrixEffect';
import  demoStartTexts  from './DemoStartTexts';

const DemoStartButtons = ({ lang }) => {
    return (
        <section className="DemoStartSection flex flex-col items-center justify-center py-24 gap-10 bg-black bg-radial text-white demo-start-buttons-bg relative overflow-hidden">
            <DemoMatrixEffect />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent z-10">
                {demoStartTexts.title1[lang]}<br /> {demoStartTexts.title2[lang]}
            </h2>
            <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4 z-10 p-4 bg-transparent">
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-[#477BFF] text-[#fff] rounded-lg font-semibold shadow hover:bg-[#3260d6] transition-all duration-150 transform hover:scale-103 cursor-pointer text-sm md:text-base">
                    {demoStartTexts.demoButton[lang]}
                </button>
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#fff] to-blue-50 text-[#2F2F2F] rounded-lg font-semibold shadow transition-all duration-150 transform hover:scale-103 cursor-pointer text-sm md:text-base">
                    {demoStartTexts.startButton[lang]}
                </button>
            </div>
        </section >
    );
}

export default DemoStartButtons;
