import * as ReactIconsBs from "react-icons/bs";

import React from "react";
import { SectionWrapper } from "../hoc";
import { footer } from "../constants";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();
  return (
    <footer {...{ className: "footer" }}>
      <div
        {...{
          className: `flex flex-col text-center`,
        }}
      >
        <h1
          {...{
            className: `"text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px]`,
          }}
        >
          {`${i18n.t(footer.title, {
            defaultValue: footer?.title,
          })}`}
        </h1>
        <div
          {...{
            className: `mt-5 flex gap-5 justify-center items-center flex-col`,
          }}
        >
          {[...(footer?.links || [])].map((footerLink, footerLinkIndex) => {
            const title = `footer.links.${footerLinkIndex}.title`;
            const underline = `footer.links.${footerLinkIndex}.underline`;
            const {
              title: linkTitle = title,
              underline: linkUnderline = underline,
              href = "/#",
              reactIconBs = "BsFillQuestionOctagonFill",
            } = footerLink || {};

            const ReactIcon = (ReactIconsBs[reactIconBs] &&
              React?.createElement(ReactIconsBs[reactIconBs])) || (
              <ReactIconsBs.BsFillQuestionOctagonFill />
            );

            return (
              <a
                {...{
                  key: footerLinkIndex,
                  href,
                  className: "flex items-center gap-2 sm:flex-row flex-col",
                  target: "_blank",
                }}
              >
                <span
                  {...{
                    className: "flex gap-2",
                  }}
                >
                  {ReactIcon}
                  <span>
                    {`${i18n.t(title, {
                      defaultValue: linkTitle,
                    })}`}
                  </span>
                </span>

                <span
                  {...{
                    className: "underline",
                  }}
                >{`${i18n.t(underline, {
                  defaultValue: linkUnderline,
                })}`}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default SectionWrapper(Footer, "Footer");
