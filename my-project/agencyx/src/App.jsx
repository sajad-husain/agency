import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ValuePillars from './components/ValuePillars/ValuePillars.jsx'
import NumbersThatSpeak from './components/NumbersThatSpeak/NumbersThatSpeak.jsx'
import ChooseScenario from './components/ChooseScenario/ChooseScenario.jsx'
import ExperiencePlatform from './components/ExperiencePlatform/ExperiencePlatform.jsx'
import DataTools from './components/DataTools/DataTools.jsx'
import SpecificSolutions from './components/SpecificSolutions/SpecificSolutions.jsx'
import Quotes from './components/Quotes/Quotes.jsx'
import SuccessStories from './components/SuccessStories/SuccessStories.jsx'
import Registration from './components/Registration/Registration.jsx'
import Founders from './components/Founders/Founders.jsx'
import DemoStartButtons from './components/DemoStartButtons/DemoStartButtons.jsx'
import Footer from './components/Footer/Footer.jsx'
import MatrixRainEffect from './components/Hero/MatrixRainEffect'
import Hero from './components/Hero/Hero'
import { LanguageProvider } from "./context/LanguageContext.jsx"

function App() {

  return (
    <>
      <LanguageProvider defaultLang='en'>
        <MatrixRainEffect />
        <Hero lang='en' />
        <Navbar lang='en' />
        <ValuePillars lang='en' />
        <NumbersThatSpeak lang="en" />
        <ChooseScenario lang="en" />
        <ExperiencePlatform lang="en" />
        <DataTools lang="en" />
        <SpecificSolutions lang="en" />
        <Quotes lang="en" />
        <SuccessStories lang="en" />
        <Registration lang="en" />
        <Founders lang="en" />
        <DemoStartButtons lang="en" />
        <Footer lang="en" />
      </LanguageProvider>
    </>
  )
}

export default App
