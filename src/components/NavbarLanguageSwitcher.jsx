import { BsTranslate } from "react-icons/bs";
import React from "react";
import { onClickLanguageItem } from "./onClickLanguageItem";
import { useTranslation } from "react-i18next";

function NavbarLanguageSwitcher({
  navbarState,
  setNavbarState,
  ...props
} = {}) {
  const { i18n } = useTranslation();

  i18n.on("languageChanged", () => {
    setNavbarState((prevNavbarState) => ({
      ...prevNavbarState,
      showLanguagesList: false,
    }));
  });

  return (
    <div
      {...{
        ...props,
      }}
    >
      <button
        {...{
          title: i18n.t("navbarLanguageSwitcher.buttonTitle"),
          onClick: () => {
            setNavbarState((prevNavbarState) => ({
              ...prevNavbarState,
              toggle: false,
              showLanguagesList: !prevNavbarState?.showLanguagesList,
            }));
          },
        }}
      >
        <BsTranslate className="text-white text-[20px]" />
      </button>
      <ul
        {...{
          className: `${
            navbarState?.showLanguagesList ? "block" : "hidden"
          } absolute ml-[-50px]`,
        }}
      >
        {Object.keys(i18n.options.resources || {}).map((resourcesLang) => (
          <li
            {...{
              key: resourcesLang,
              title: i18n.t(resourcesLang),
              className: `${
                i18n.language === resourcesLang
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer text-transform-capitalize 
                      bg-[var(--black-343)] py-2 px-4`,
              onClick: onClickLanguageItem({ resourcesLang, i18n }),
            }}
          >
            {i18n.t(`navbarLanguageSwitcher.language.${resourcesLang}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarLanguageSwitcher;
