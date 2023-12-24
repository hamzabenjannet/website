import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import english from "./english.json";
import french from "./french.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "english",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      english,

      french,
    },
  });

export default i18next;
