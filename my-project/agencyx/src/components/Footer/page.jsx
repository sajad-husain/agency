
import React from 'react';
import Image from 'next/image';
import GasFooterLogo from '../../public/GasFooterLogo.png';
import GasLogo from '../../public/GasLogo.png';
import { TbWorld } from 'react-icons/tb';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6'; 
import footerTexts from './footerTexts.js'; 
import LanguageSelect from '../LanguageSelect';

const Footer =  ( {lang} ) => {

  return (
    <footer className="w-full mx-auto bg-black text-white flex flex-col items-center justify-center px-2 md:px-8 lg:px-16 xl:px-24 py-4 md:py-6 lg:py-12 xl:py-20">
      <div className='max-w-6xl w-full bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-start'>
        <div className=' w-full col-span-2 flex items-center justify-center'>
        <div className="flex flex-col items-center md:items-start pb-4 gap-6 w-full">
          <div className="flex items-center gap-2">
            <Image src={GasLogo} alt="AgencyX Logo" width={107} height={36} className="mb-2" />
          </div>
          <div className="text-gray-100 text-[13px] leading-relaxed font-light max-w-[220px]">
            {footerTexts.description[lang]}
          </div>
          <div className="border-t border-gray-700 w-[220px] my-2"></div>
          <div className="flex items-center gap-2 mt-2 mb-2">
            <Image src={GasFooterLogo} alt="GAS Logo" width={90} height={30} />
          </div>
          <div className="border-t border-gray-700 w-[220px] my-2"></div>
          <div className="flex items-center gap-2 text-white text-sm">
          <TbWorld size={16}/>
          <LanguageSelect lang={lang} />
          </div>
          <div className="mt-2 text-white text-sm">
            <div>İskele Kıbrıs</div>
            <div>+90 533 841 40 27</div>
          </div>
        </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
                    {/* Solutions */}
                    <div>
            <h4 className="text-blue-400 font-semibold mb-3">{footerTexts.links[0].title[lang]}</h4>
            <ul className="flex flex-col gap-2 text-[15px]">
              {footerTexts.links[0].items[lang].map((link, idx) => (
                <li key={idx}>
                  {typeof link === 'string' ? (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                  ) : (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link.text}{link.span ? <span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1 ml-2">{link.span}</span> : null}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=' w-full flex flex-col items-center justify-center'>
          {/* Use Cases */}
        <div>
            <h4 className="text-blue-400 font-semibold mb-3">{footerTexts.links[1].title[lang]}</h4>
            <ul className="flex flex-col gap-2 text-[15px]">
              {footerTexts.links[1].items[lang].map((link, idx) => (
                <li key={idx}>
                  {typeof link === 'string' ? (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                  ) : (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link.text}{link.span ? <span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1 ml-2">{link.span}</span> : null}</a>
                  )}
                </li>
              ))}
            </ul>
            <h4 className="text-blue-400 font-semibold mb-3 mt-4">{footerTexts.links[4].title[lang]}</h4>
            <ul className="flex flex-col gap-2 text-[15px]">
              {footerTexts.links[4].items[lang].map((link, idx) => (
                <li key={idx}>
                  {typeof link === 'string' ? (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                  ) : (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link.text}{link.span ? <span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1 ml-2">{link.span}</span> : null}</a>
                  )}
                </li>
              ))}
            </ul>
          
          </div>
        </div>
        <div className=' w-full flex flex-col items-center justify-center'>

                  {/* Resources */}
                  <div>
            <h4 className="text-blue-400 font-semibold mb-3 ">{footerTexts.links[2].title[lang]}</h4>
            <ul className="flex flex-col gap-2 text-[15px]">
              {footerTexts.links[2].items[lang].map((link, idx) => (
                <li key={idx}>
                  {typeof link === 'string' ? (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                  ) : (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link.text}{link.span ? <span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1 ml-2">{link.span}</span> : null}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className=' w-full flex flex-col items-center justify-center'>
                    {/* Company */}
                    <div>
            <h4 className="text-blue-400 font-semibold mb-3">{footerTexts.links[3].title[lang]}</h4>
            <ul className="flex flex-col gap-2 text-[15px]">
              {footerTexts.links[3].items[lang].map((link, idx) => (
                <li key={idx}>
                  {typeof link === 'string' ? (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                  ) : (
                    <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">{link.text}{link.span ? <span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1 ml-2">{link.span}</span> : null}</a>
                  )}
                </li>
              ))}
              <li className="flex items-center gap-2"><a className="hover:text-blue-400 transition-colors cursor-pointer">Careers</a><span className="bg-[#659BFF] text-xs text-white rounded-full px-2 py-1">Hiring</span></li>
            </ul>
          </div>
        </div>  
      </div>

      <div className='flex flex-row items-start justify-between w-full max-w-6xl mx-auto gap-6 text-gray-600 mt-8  md:mt-12 '>
  <div className='flex flex-row flex-wrap gap-4 items-start'>
  {footerTexts.terms.map((term, idx) => (
    <a key={idx} className="hover:text-white cursor-pointer  flex flex-col items-center justify-center px-2 py-1">{term[lang]}</a>
  ))}
  </div>
  <div>
  <a className="hover:text-white cursor-pointer">{footerTexts.sitemap[lang]}</a>
  </div>
      </div>
        

      <div className='border-t border-gray-600 pt-4 w-full max-w-6xl mx-auto mt-2'>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-between w-full"> 
        <p> {footerTexts.copyright[lang]}</p>
        <div className="flex gap-3 items-center">
          <a href="#" className="hover:text-blue-400"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin size={18} /></a>
          <a href="#" className="hover:text-blue-400"><FaGithub size={18} /></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;  