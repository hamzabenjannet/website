import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import NavbarLanguageSwitcher from "./NavbarLanguageSwitcher";
import React from "react";
import RenderNavLiLink from "./RenderNavLiLink";
import { logoSvg } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../constants";
import useDidScrolledDownHook from "../hooks/useDidScrolledDownHook";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n } = useTranslation();

  const [navbarState, setNavbarState] = React.useState({
    active: false,
    toggle: false,
    showLanguagesList: false,
  });

  const hasScrolledDown = useDidScrolledDownHook();

  React.useEffect(() => {
    const hash = window.location?.hash?.replace?.("#", "");
    if (hash) {
      setNavbarState({
        ...navbarState,
        ...(hash ? { active: hash } : {}),
      });
      window.location = `#${hash}`;
    }

    return () => {};
  }, []);

  return (
    <nav
      {...{
        id: `NavbarNav`,
        className: `transition-1s-all-ease-in-out w-full flex items-center py-5 fixed top-0 z-20 ${
          styles.paddingX
        } ${
          hasScrolledDown
            ? "primary-50-opacity-gradient-to-0"
            : "bg-transparent"
        }`,
      }}
    >
      <div
        {...{
          className:
            "w-full flex justify-between items-center max-w-7xl mx-auto",
        }}
      >
        <Link
          {...{
            title: i18n.t("navbar.homeLinkTitle"),
            to: "/",
            className: "flex items-center gap-2",
            onClick: () => {
              setNavbarState((prevNavbarState) => ({
                ...prevNavbarState,
                active: false,
                toggle: false,
              }));
              window.scrollTo(0, 0);
            },
          }}
        >
          <img
            {...{
              src: logoSvg,
              alt: "logo",
              className: "w-9 h-9 object-contain",
            }}
          />
          <p
            {...{
              className: "text-white text-[18px] font-bold cursor-pointer flex",
            }}
          >
            {i18n.t("navbar.homeLinkText")}
          </p>
        </Link>

        <div
          {...{
            className: "hidden sm:flex flex-row gap-10",
          }}
        >
          <ul
            {...{
              className: "list-none hidden sm:flex flex-row gap-10",
            }}
          >
            {[...(navLinks ?? [])].map((navLink, navIndex) => (
              <RenderNavLiLink
                {...{
                  navLink,
                  navIndex,
                  navbarState,
                  setNavbarState,
                }}
              />
            ))}
          </ul>
          <NavbarLanguageSwitcher
            {...{
              navbarState,
              setNavbarState,
            }}
          />
        </div>

        <MobileNavbar
          {...{
            navbarState,
            setNavbarState,
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
