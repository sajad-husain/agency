'use client'
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import flagEng from "../public/langs/flagEng.png";
import flagTur from "../public/langs/flagTr.png";

const languages = [
  { code: 'en', name: 'EN', flag: flagEng },
  { code: 'tr', name: 'TR', flag: flagTur }
];

export default function LanguageSelect() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (!pathname) return;
    const match = pathname.match(/^\/(en|tr)(\/|$)/);
    const langCode = match ? match[1] : 'en';
    setSelected(languages[langCode === 'tr' ? 1 : 0]);
  }, [pathname]);

  if (loading) return <Loader />;

  return (
    <div className="relative inline-block ml-4 w-24">
      <button
        className="bg-black text-white w-full flex items-center justify-between px-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Image src={selected.flag} alt={selected.name} width={20} height={14} />
          {selected.name}
        </div>
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-black border border-b rounded shadow w-full">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
                setLoading(true);
                if (lang.code === 'en') {
                  router.push('/en');
                } else if (lang.code === 'tr') {
                  router.push('/tr');
                }
                // Router push sonrası loading'i kapatmak için küçük bir gecikme
                setTimeout(() => setLoading(false), 1500);
              }}
              className={`flex items-center gap-2 w-full px-2 py-1 bg-black text-white ${selected.code === lang.code ? 'font-bold' : ''}`}
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={14} />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

