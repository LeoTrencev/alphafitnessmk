import { createContext, useContext, useState, ReactNode } from "react";

type Language = "mk" | "en";

type Translations = {
  [key: string]: { mk: string; en: string };
};

const translations: Translations = {
  "nav.home": { mk: "Почетна", en: "Home" },
  "nav.about": { mk: "За нас", en: "About Us" },
  "nav.gallery": { mk: "Галерија", en: "Gallery" },
  "nav.pricing": { mk: "Ценовник", en: "Pricing" },
  "nav.contact": { mk: "Контакт", en: "Contact" },
  "hero.subtitle": { mk: "ТЕРЕТАНА & ФИТНЕС ЦЕНТАР", en: "GYM & FITNESS CENTER" },
  "hero.title": { mk: "ИЗГРАДИ ГО\nНАЈДОБРОТО ОД СЕБЕ", en: "BUILD THE\nBEST VERSION OF YOU" },
  "hero.cta": { mk: "Започни денес", en: "Start Today" },
  "hero.hours": { mk: "Работно време", en: "Working Hours" },
  "about.subtitle": { mk: "ЗА НАС", en: "ABOUT US" },
  "about.title": { mk: "Повеќе од теретана", en: "More than a gym" },
  "about.desc": {
    mk: "Alpha Fitness е премиум фитнес центар лоциран во срцето на Радовиш. Опремена со најсовремена опрема и посветен тренерски тим, нашата теретана е дизајнирана да ви помогне да ги постигнете вашите фитнес цели — без разлика дали сте почетник или напреден спортист.",
    en: "Alpha Fitness is a premium fitness center located in the heart of Radovish. Equipped with state-of-the-art equipment and a dedicated coaching team, our gym is designed to help you achieve your fitness goals — whether you're a beginner or an advanced athlete."
  },
  "about.feature1.title": { mk: "Модерна опрема", en: "Modern Equipment" },
  "about.feature1.desc": { mk: "Најнова генерација на фитнес опрема за секој тип на тренинг", en: "Latest generation fitness equipment for every type of training" },
  "about.feature2.title": { mk: "Fingerprint пристап", en: "Fingerprint Access" },
  "about.feature2.desc": { mk: "Влез во теретаната со fingerprint технологија за брз и безбеден пристап", en: "Enter the gym with fingerprint technology for quick and secure access" },
  "about.feature3.title": { mk: "Флексибилно работно време", en: "Flexible Hours" },
  "about.feature3.desc": { mk: "Отворени 7 дена во неделата со удобно работно време", en: "Open 7 days a week with convenient working hours" },
  "gallery.subtitle": { mk: "ГАЛЕРИЈА", en: "GALLERY" },
  "gallery.title": { mk: "Погледни ја нашата теретана", en: "Take a look at our gym" },
  "pricing.subtitle": { mk: "ЦЕНОВНИК", en: "PRICING" },
  "pricing.title": { mk: "Избери го твојот план", en: "Choose your plan" },
  "pricing.daily": { mk: "1 Ден", en: "1 Day" },
  "pricing.biweekly": { mk: "2 Недели", en: "2 Weeks" },
  "pricing.monthly": { mk: "1 Месец", en: "1 Month" },
  "pricing.quarterly": { mk: "3 Месеци", en: "3 Months" },
  "pricing.yearly": { mk: "1 Година", en: "1 Year" },
  "pricing.den": { mk: "ден", en: "den" },
  "pricing.popular": { mk: "Најпопуларен", en: "Most Popular" },
  "pricing.bestValue": { mk: "Најдобра вредност", en: "Best Value" },
  "pricing.feature1": { mk: "Целосен пристап до опрема", en: "Full equipment access" },
  "pricing.feature2": { mk: "Гардероба", en: "Locker room" },
  "pricing.feature3": { mk: "Бесплатен паркинг", en: "Free parking" },
  "contact.subtitle": { mk: "КОНТАКТ", en: "CONTACT" },
  "contact.title": { mk: "Поврзи се со нас", en: "Get in touch" },
  "contact.address": { mk: "Адреса", en: "Address" },
  "contact.phone": { mk: "Телефон", en: "Phone" },
  "contact.email": { mk: "Е-пошта", en: "Email" },
  "contact.hours": { mk: "Работно време", en: "Working Hours" },
  "contact.monFri": { mk: "Понеделник - Петок", en: "Monday - Friday" },
  "contact.sat": { mk: "Сабота", en: "Saturday" },
  "contact.sun": { mk: "Недела", en: "Sunday" },
  "contact.name": { mk: "Име и Презиме", en: "Full Name" },
  "contact.message": { mk: "Порака", en: "Message" },
  "contact.send": { mk: "Испрати порака", en: "Send Message" },
  "footer.rights": { mk: "Сите права задржани.", en: "All rights reserved." },
  "footer.followUs": { mk: "Следи не", en: "Follow Us" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("mk");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
