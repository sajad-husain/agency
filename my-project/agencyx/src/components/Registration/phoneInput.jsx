
"use client"

import React, { useEffect, useState } from "react";

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data
    .map((country) => {
      const suffix = country.idd?.suffixes?.[0] || "";
      return {
        name: country.name.common,
        code: country.cca2,
        dialCode: country.idd?.root ? `${country.idd.root}${suffix}` : "",
        flag: country.flags?.svg || "",
      };
    })
    .filter((c) => c.dialCode);
};

// Girilen inputu ülke koduna göre maskele (TR için özel, diğerleri için genel)
function maskPhoneInputFree(input, selected) {
  if (!input) return "";
  // Sadece rakamları al (ülke kodu dahil)
  let digits = input.replace(/\D/g, "");
  let code = "";
  if (digits.startsWith("90")) code = "+90";
  else if (selected && selected.dialCode) code = selected.dialCode;
  else code = "+";
  // TR için özel maske
  if (digits.startsWith("90")) {
    let formatted = "+90";
    if (digits.length > 2) {
      formatted += " " + digits.slice(2, 5);
    }
    if (digits.length > 5) {
      formatted += " " + digits.slice(5, 8);
    }
    if (digits.length > 8) {
      formatted += " " + digits.slice(8, 10);
    }
    if (digits.length > 10) {
      formatted += " " + digits.slice(10, 12);
    }
    return formatted;
  } else if (selected && selected.dialCode) {
    // Diğer ülke kodları için: +ülkekodu kalan
    let codeLen = selected.dialCode.replace("+", "").length;
    if (digits.length >= codeLen) {
      let formatted = "+" + digits.slice(0, codeLen);
      if (digits.length > codeLen) {
        formatted += " " + digits.slice(codeLen);
      }
      return formatted;
    }
  }
  // Varsayılan: +tümü
  return "+" + digits;
}

const Page = () => {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [phoneInput, setPhoneInput] = useState(""); // inputun tamamı
  const [loading, setLoading] = useState(true);
  const inputRef = React.useRef(null);

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountries(data);
      const defaultCountry = data.find((c) => c.code === "TR") || data[0];
      setSelected(defaultCountry);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen  flex flex-col items-center justify-center bg-[#23252C]">
        <div className="text-gray-500 text-lg font-semibold tracking-wide">Yükleniyor...</div>
      </section>
    );
  }

  return (
      <div
        className="w-full max-w-md sm:max-w-lg bg-[#23252C] rounded-lg py-1 shadow-xl border border-[#3A3C4A] focus:border-blue-500 flex flex-col gap-6"
        
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-transparent shadow-none focus:border-blue-500 transition-all">
            {selected && (
              <img src={selected.flag} alt={selected.code} className="w-6 h-4 sm:w-7 sm:h-5 mr-1.5 sm:mr-2 rounded border border-[#3A3C4A] shadow-none" />
            )}
            <select
              className="text-[15px] max-w-[60px] outline-none pr-2 font-medium bg-[#23252C] text-gray-200 cursor-pointer appearance-none focus:ring-0 focus:outline-none border-none"
              value={selected?.code || ""}
              onChange={(e) => {
                const country = countries.find((c) => c.code === e.target.value);
                setSelected(country);
                setPhoneInput(country.dialCode ? country.dialCode : "+"); // ülke değişince input başı ülke kodu ile başlasın
                setTimeout(() => {
                  inputRef.current?.focus();
                }, 100);
              }}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.dialCode})
                </option>
              ))}
            </select>
          </div>
          <input
            ref={inputRef}
            type="tel"
            value={maskPhoneInputFree(phoneInput, selected)}
            onChange={(e) => {
              let val = e.target.value;
              // Sadece +, rakam ve boşlukları al
              val = val.replace(/[^\d\+ ]/g, "");
              setPhoneInput(val);

              // Ülke kodunu normalize ederek algıla
              const normalized = val.replace(/[^\d]/g, "");
              let matched = null;
              let maxLen = 0;
              countries.forEach((c) => {
                const code = c.dialCode.replace(/[^\d]/g, "");
                if (
                  code &&
                  normalized.startsWith(code) &&
                  code.length > maxLen
                ) {
                  matched = c;
                  maxLen = code.length;
                }
              });
              if (matched && matched.code !== selected?.code) {
                setSelected(matched);
              }
            }}
            placeholder={selected?.code === "TR" ? "+90 5XX XXX XX XX" : (selected?.dialCode ? selected.dialCode + " ..." : "+ ...")}
            className="flex-1 bg-transparent border-none text-gray-200 px-4 py-3 text-[15px] font-medium focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
          />

        </div>
      </div>
    
  );
};

export default Page;
