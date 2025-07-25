import React, { useState, useEffect } from 'react';
import flagEng from "../assets/langs/flagEng.png";
import flagTur from "../assets/langs/flagTr.png";
import Loader from '../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'EN', flag: flagEng },
  { code: 'tr', name: 'TR', flag: flagTur }
];

export default function LanguageSelect() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    const match = pathname.match(/^\/(en|tr)(\/|$)/);
    const langCode = match ? match[1] : 'en';
    setSelected(languages.find(lang => lang.code === langCode) || languages[0]);
  }, [location.pathname]);

  if (loading) return <Loader />;

  const handleLanguageChange = (lang) => {
    setSelected(lang);
    setIsOpen(false);
    setLoading(true);

    // Navigate to the language route
    if (lang.code === 'en') {
      navigate('/en');
    } else if (lang.code === 'tr') {
      navigate('/tr');
    }

    // Small delay to simulate loading
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="relative inline-block ml-4 w-24">
      <button
        className="bg-black text-white w-full flex items-center justify-between px-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <img src={selected.flag} alt={selected.name} width={20} height={14} />
          {selected.name}
        </div>
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-black border border-b rounded shadow w-full">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`flex items-center gap-2 w-full px-2 py-1 bg-black text-white ${selected.code === lang.code ? 'font-bold' : ''}`}
            >
              <img src={lang.flag} alt={lang.name} width={20} height={14} />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
