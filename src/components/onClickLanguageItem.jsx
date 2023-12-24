export function onClickLanguageItem({ resourcesLang, i18n } = {}) {
  return () => {
    i18n.changeLanguage(resourcesLang);
  };
}
