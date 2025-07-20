import { LuPhoneCall } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { TfiAlarmClock } from "react-icons/tfi";

export const numbersText = {
  title: {
    en: "Numbers That Speak",
    tr: "Canlı Rakamlar"
  },
  cards: [
    {
      icon: LuPhoneCall,
      value: '4,392',
      label: {
        en: "Chats handled",
        tr: "Sohbet yönetildi"
      }
    },
    {
      icon: GoGift,
      value: '1,212',
      label: {
        en: "Loyalty redemptions",
        tr: "Sadakat ödülü kullanıldı "
      }
    },
    {
      icon: TfiAlarmClock,
      value: '3,180',
      label: {
        en: "Calls routed today",
        tr: "Çağrı yönlendirildi"
      }
    }
  ]

}