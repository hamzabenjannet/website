import { BsThreeDots } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import NavbarLanguageSwitcher from "./NavbarLanguageSwitcher";
import React from "react";
import RenderNavLiLink from "./RenderNavLiLink";
import { navLinks } from "../constants";

function MobileNavbar({ navbarState = {}, setNavbarState = () => {} } = {}) {
  const onClickToggleMenu = () => {
    setNavbarState((prevNavbarState) => ({
      ...prevNavbarState,
      toggle: !prevNavbarState.toggle,
      showLanguagesList: false,
    }));
  };

  const NavLinksRender = [...(navLinks ?? [])].map((navLink, navIndex) => (
    <RenderNavLiLink
      {...{
        navLink,
        navIndex,
        navbarState,
        setNavbarState,
      }}
    />
  ));

  return (
    <div
      {...{
        className: "sm:hidden flex flex-1 justify-end items-center",
      }}
    >
      <div {...{ className: "gap-x-5 flex row" }}>
        <button
          {...{
            className: "",
            onClick: onClickToggleMenu,
          }}
        >
          {navbarState.toggle ? (
            <BsXLg {...{ className: "text-white text-[28px]" }} />
          ) : (
            <BsThreeDots {...{ className: "text-white text-[28px]" }} />
          )}
        </button>
        <NavbarLanguageSwitcher {...{ navbarState, setNavbarState }} />
      </div>

      <div
        {...{
          className:
            "p-6 black-gradient absolute top-20 z-10 transition-1s-all-ease-in-out flex left-[-100vw] top-[100vh]  mobileMenu",
          style: {
            left: navbarState.toggle ? 0 : "-100vw",
            top: navbarState.toggle ? 100 : "100vh",
          },
        }}
      >
        <ul
          {...{
            className:
              "list-none flex justify-end items-start flex-1 flex-col gap-4 text-200",
          }}
        >
          {[...NavLinksRender]}
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
