import React, { createContext, useContext, useState } from 'react';

interface LangContextType {
  language: string | 'en';
  langMenuOpen: boolean | false;
  toggleLangMenuOpen: () => void;
  changeLang: (lang: string) => void;
  t: (key: string) => string;
  openModal: boolean | false;
  toggleOpenModal: () => void;
}

const langContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: React.ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [langMenuOpen, setLangMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeLang = (lang: string) => {
    setLanguage(lang);
  };

  const toggleLangMenuOpen = () => {
    setLangMenuOpen((prev) => !prev);
  };

  function getTranslations() {
    return require(`@/assets/locales/${language}`);
  }

  function toggleOpenModal() {
    setOpenModal((prev) => !prev);
  }

  const t = (key: string) => {
    //@ts-ignore
    const translations: { [key: string]: string } | undefined = getTranslations();
    try {
      return translations ? translations[key] : key;
    } catch (error) {
      return key;
    }
  };

  return (
    <langContext.Provider
      value={{
        language,
        langMenuOpen,
        changeLang,
        toggleLangMenuOpen,
        t,
        openModal,
        toggleOpenModal
      }}
    >
      {children}
    </langContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(langContext);
  if (!context) {
    throw new Error('useRoot must be used within a RootProvider');
  }
  return context;
};
