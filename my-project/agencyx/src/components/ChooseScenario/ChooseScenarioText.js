import { GiSpeedometer } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { IoGitMergeOutline } from "react-icons/io5";
import { RiChatVoiceAiLine } from "react-icons/ri";

const chooseScenarioText = {

    title: {    
      en: "Choose Your Scenario",
      tr: "Senaryonu Seç"
    },
    cards: [
        {
            icon: (
                <IoStatsChart className='text-green-400 size-4' />
              ),
            title: {
                en: "Hotel",
                tr: "Otel"
            },
            subtitle: {
                en: "Streamline guest experiences and operational efficiency.",
                tr: "Misafir deneyimlerini ve operasyonel verimliliği iyileştir."
            }
        },
        {
            icon: (
                <GiSpeedometer className='text-green-400 size-4' />  
              ),
            title: {
                en: "Agency",
                tr: "Ajans"
            },
            subtitle: {
                en: "Optimize client workflows and project management.",
                tr: "Müşteri iş akışlarını ve proje süreçlerini optimize et."
            }
        },
        {
            icon: (
            <IoGitMergeOutline className='text-green-400 size-4' />
                
              ),
            title: {
                en: "Boost Productivity",
                tr: "Verimlilik"
            },
            subtitle: {
                en: "Enhance customer engagement and inventory management.",
                tr: "Müşteri etkileşimini ve stok yönetimini ileri taşı."
            }
        },

        {
            icon: (
                <RiChatVoiceAiLine className='text-green-400 size-4' />
                
              ),
            title: {
                en: "Finance",
                tr: "Finans"
            },
            subtitle: {
                en: "Automate compliance and enhance customer service.",
                tr: "Uyum süreçlerini otomatikleştir, müşteri hizmetlerini geliştir."
            }
        
        }
    ]
  };

export default chooseScenarioText;