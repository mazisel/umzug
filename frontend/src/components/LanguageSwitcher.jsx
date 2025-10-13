import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'ku', name: 'Kurdî', flag: '🏴' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="text-white hover:text-yellow-500 hover:bg-gray-900 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-sm">{currentLanguage.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 min-w-[180px]">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center gap-3 ${
                  i18n.language === language.code 
                    ? 'bg-yellow-500/20 text-yellow-500' 
                    : 'text-white'
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;