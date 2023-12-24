import React from "react";
import { useTranslation } from "react-i18next";

function RenderNavLiLink({
  navLink = {},
  navIndex = 0,
  navbarState = {},
  setNavbarState = () => {},
} = {}) {
  const { i18n } = useTranslation();
  const { id: navId = "", title: navTitle = "" } = navLink ?? {};

  const onClickNavLi = () =>
    setNavbarState((prevNavbarState) => ({
      ...prevNavbarState,
      active: navTitle,
      toggle: false,
    }));
  return (
    <li
      {...{
        key: navId || navIndex,
        className: `${
          navbarState?.active === navTitle ? "text-white" : "text-secondary"
        } hover:text-white cursor-pointer`,

        onClick: onClickNavLi,
      }}
    >
      <a
        {...{
          title: i18n.t(`navbar.menu.title.${navIndex}`, {
            navTitle,
            defaultValue: navTitle,
          }),
          href: navId,
          className: "text-transform-capitalize",
        }}
      >
        {i18n.t(`navbar.menu.title.${navIndex}`, {
          navTitle,
          defaultValue: navTitle,
        })}
      </a>
    </li>
  );
}

export default RenderNavLiLink;
