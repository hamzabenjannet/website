import { about, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import React from "react";
import RenderHtmlComponents from "../utils/RenderHtmlComponents";
import RenderSectionHeder from "./RenderSectionHeder";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <motion.div {...{ variants: textVariant() }}>
        <RenderSectionHeder
          {...{ label: i18n.t("about.label"), title: i18n.t("about.title") }}
        />
      </motion.div>

      <motion.p
        {...{
          variants: fadeIn("", "", 0.1, 1),
          className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",
        }}
      >
        {about.map(({ content } = {}, contentIndex) => {
          return RenderHtmlComponents(
            i18n.t(`about.description.content`, {
              defaultValue: content,
            }),
            contentIndex
          );
        })}
      </motion.p>

      <div {...{ className: "mt-20 flex flex-wrap gap-10" }}>
        {services.map((service, index) => (
          <ServiceCard {...{ key: service.title, index, ...(service ?? {}) }} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default SectionWrapper(About, "About");
