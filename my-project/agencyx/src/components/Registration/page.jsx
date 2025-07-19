"use client";

import React, { useState } from 'react';
import { FaGlobe, FaChartBar, FaRobot, FaCubes, FaDatabase, FaEllipsisH } from 'react-icons/fa';
import registrationText from './registrationText';
// PhoneInput import removed, replaced with inline logic for local SVGs
import CountryPhoneInput from './CountryPhoneInput';  

function ServiceCard({ icon, label, checked, onChange }) {
  return (
    <label className={`flex flex-col items-center justify-center gap-2 p-5 rounded-xl border-2 cursor-pointer transition-all text-gray-200 text-[15px] shadow-sm select-none
      ${checked ? 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-400' : 'border-[#34374A] bg-[#23252C] hover:border-blue-400 hover:bg-blue-900/10'}`}
      style={{ minHeight: '104px' }}>
      <input
        type="checkbox"
        value={label}
        checked={checked}
        onChange={onChange}
        className="hidden"
        aria-checked={checked}
      />
      <span className="mb-1">{icon}</span>
      <span className="font-medium">{label}</span>
    </label>
  );
}

export default function Registration({lang}) {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    businessName: '',
    businessType: '',
    businessSize: '',
    services: [],
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleStepClick = (idx) => setActiveStep(idx);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (e) =>
    setForm((prev) => ({ ...prev, businessSize: e.target.value }));

  const handleService = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      let services = prev.services;
      if (checked) services = [...services, value];
      else services = services.filter((s) => s !== value);
      return { ...prev, services };
    });
  };

  // Form doğrulama fonksiyonu
  const validateStep = (step) => {
    switch(step) {
      case 0:
        return form.businessName.trim() !== '' && form.businessType.trim() !== '';
      case 1:
        return form.services.length > 0;
      case 2:
        return form.fullName.trim() !== '' && 
               form.email.trim() !== '' && 
               form.phone.trim() !== '' && 
               form.address.trim() !== '';
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep < 2) setActiveStep(activeStep + 1);
      else handleSubmit();
    } else {
      alert('Lütfen tüm alanları doldurunuz.');
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    // Tüm form alanlarının doldurulup doldurulmadığını kontrol et
    const isFormComplete = form.businessName.trim() !== '' && 
                          form.businessType.trim() !== '' && 
                          form.services.length > 0 && 
                          form.fullName.trim() !== '' && 
                          form.email.trim() !== '' && 
                          form.phone.trim() !== '' && 
                          form.address.trim() !== '';

    if (isFormComplete) {
      alert('Form submitted!\n' + JSON.stringify(form, null, 2));
    } else {
      alert('Formda boş alanlar var. Lütfen tüm alanları doldurunuz.');
    }
  };

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center relative px-2 md:px-4 lg:px-12 py-8 md:py-12 xl:py-24 gap-2 sm:gap-4 md:gap-6 lg:gap-12"
      style={{
        backgroundImage: "url('/Registration/Registration.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center w-full pt-20 pb-10">
        <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-12 drop-shadow-lg">
          {registrationText.title[lang]}
        </h2>

        <div className="w-full max-w-xl bg-[#23252C] rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center min-h-[600px] h-[600px] md:min-h-[580px] md:h-[580px] justify-center">
          <form className="flex flex-col items-start w-full h-[450px] min-h-[450px] relative">
            {/* Stepper */}
            <div className="w-full max-w-lg h-20 flex items-center justify-center flex-shrink-0 mx-auto mb-2 text-center">
              <div className="flex w-full items-center justify-center flex-nowrap gap-x-1 sm:gap-x-4 ">
                {registrationText.steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    {/* Step Circle */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 cursor-pointer
                          ${activeStep >= idx
                            ? 'bg-blue-500 border-blue-500 text-white shadow-lg'
                            : 'bg-[#23252C] border-[#34374A] text-blue-200'
                          }`}
                        onClick={() => handleStepClick(idx)}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className={`mt-2 text-xs transition-colors duration-300 ${
                          activeStep >= idx ? 'text-blue-400 font-medium' : 'text-blue-400 font-light'
                        }`}
                      >
                        {step.label[lang]}
                      </span>
                    </div>

                    {/* Connector Line */}
{idx < registrationText.steps.length - 1 && (
  <div
    className={`
      flex-1 h-0.5 mx-3 mt-4
      bg-[#34374A]            /* inaktif renk */
      transform origin-left
      transition-transform duration-500
      ${activeStep > idx ? 'bg-blue-500 scale-x-100' : 'scale-x-0'}
    `}
    style={{ minWidth: '48px' }}
  />
)}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Steps */}
            <div className="flex-1 w-full">
              {activeStep === 0 && (
                <div className="flex flex-col justify-center h-full gap-5">
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.businessName[lang]}</label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleInput}
                      className="w-full bg-transparent border border-[#3A3C4A] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 transition text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.businessType[lang]}</label>
                    <input
                      type="text"
                      name="businessType"
                      value={form.businessType}
                      onChange={handleInput}
                      className="w-full bg-transparent border border-[#3A3C4A] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 transition text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.businessSize[lang]}</label>
                    <div className="flex flex-wrap gap-6 mt-1">
                      {registrationText.businessSizeOptions.map((option) => (
                        <label key={option[lang]} className="inline-flex items-center text-gray-400 text-[15px] gap-2 cursor-pointer">
                          <input type="radio" name="business-size" value={option[lang]} checked={form.businessSize === option[lang]} onChange={handleRadio} className="accent-blue-500 w-4 h-4" />
                          <span>{option[lang]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="grid grid-cols-2 gap-5 h-full items-center justify-center">
                  <ServiceCard icon={<FaGlobe className="text-2xl" />} label={registrationText.services[0][lang]} checked={form.services.includes(registrationText.services[0][lang])} onChange={handleService} />
                  <ServiceCard icon={<FaChartBar className="text-2xl" />} label={registrationText.services[1][lang]} checked={form.services.includes(registrationText.services[1][lang])} onChange={handleService} />
                  <ServiceCard icon={<FaRobot className="text-2xl" />} label={registrationText.services[2][lang]} checked={form.services.includes(registrationText.services[2][lang])} onChange={handleService} />
                  <ServiceCard icon={<FaCubes className="text-2xl" />} label={registrationText.services[3][lang]} checked={form.services.includes(registrationText.services[3][lang])} onChange={handleService} />
                  <ServiceCard icon={<FaDatabase className="text-2xl" />} label={registrationText.services[4][lang]} checked={form.services.includes(registrationText.services[4][lang])} onChange={handleService} />
                  <ServiceCard icon={<FaEllipsisH className="text-2xl" />} label={registrationText.services[5][lang]} checked={form.services.includes(registrationText.services[5][lang])} onChange={handleService} />
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col justify-center h-full gap-5">
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.fullName[lang]}</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleInput}
                      required
                      className="w-full bg-transparent border border-[#3A3C4A] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 transition text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.email[lang]}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInput}
                      required
                      className="w-full bg-transparent border border-[#3A3C4A] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 transition text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.phone[lang]}</label>
                    <CountryPhoneInput
                      name="phone"
                      value={form.phone}
                      onChange={(val) => setForm((prev) => ({ ...prev, phone: val }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-[15px] mb-2">{registrationText.address[lang]}</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleInput}
                      required
                      className="w-full bg-transparent border border-[#3A3C4A] rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500 transition text-[15px]"
                    />
                  </div>
                </div>
              )}
            </div>
          </form>

          <div className="flex justify-end w-full mt-8 gap-4">
            {activeStep > 0 && (
              <button
                type="button"
                className="w-full md:w-48 h-12 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition rounded-xl text-white text-[17px] font-medium shadow-lg"
                onClick={handleBack}
              >
                {registrationText.back[lang]}
              </button>
            )}
            <button
              type="button"
              className="w-full md:w-48 h-12 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition rounded-xl text-white text-[17px] font-medium shadow-lg"
              onClick={activeStep < 2 ? handleNext : handleSubmit}
            >
              {activeStep < 2 ? registrationText.next[lang] : registrationText.submit[lang]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
