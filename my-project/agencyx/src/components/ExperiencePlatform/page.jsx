import Image from "next/image"; 
import "./ExperiencePlatform.css";
import experiencePlatformTexts from "./experiencePlatformTexts";

const Page = ({lang}) => {
  return (
    
          <section className="bg-black flex flex-col items-center justify-center  w-full py-8 md:py-12 xl:py-24 gap-2 sm:gap-4 md:gap-6 lg:gap-12">

      {/* Başlık */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent">
        {experiencePlatformTexts.title[lang]}
      </h2>

      {/* Kart ve Tablar */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
  <div
  className="cardEffect w-[340px] h-[200px] sm:w-[600px] sm:h-[360px] md:w-[800px] md:h-[480px] mx-auto flex items-center justify-center relative"
>
  <Image
    src="/ExperiencePlatform/ExperiencePlatform.svg"
    alt="Experience Platform"
    width={800}
    height={480}
    className="object-contain"
    priority
  />
</div>
</div>


      {/* Alt Buton */}
    <div className="max-w-[300px] flex flex-col items-center gap-6">
      <a  className="font-light text-lg text-gray-400 cursor-pointer hover:underline">{experiencePlatformTexts.subtitle[lang]}</a>
    <button className="text-sm sm:text-base md:text-lg text-nowrap  px-6 py-2 bg-blue-600 text-[#fff] rounded-lg font-medium shadow hover:bg-blue-500 transition-all">
        {experiencePlatformTexts.button[lang]}
      </button>
    </div>
    </section>
    
  );
};

export default Page;