import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'AR';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'EN', setLang: () => {}, isRtl: false });

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [lang, setLang] = useState<Language>('AR');
  const isRtl = lang === 'AR';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'ar' : 'en';
  }, [isRtl]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
