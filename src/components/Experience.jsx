import "react-vertical-timeline-component/style.min.css";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import ExperienceCard from "./ExperienceCard";
import React from "react";
import RenderSectionHeder from "./RenderSectionHeder";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../constants";
import { useTranslation } from "react-i18next";

function Experience() {
  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <motion.div>
        <RenderSectionHeder
          {...{
            label: i18n.t("experience.label"),
            title: i18n.t("experience.title"),
          }}
        />
      </motion.div>

      <div {...{ className: "mt-10 flex flex-col" }}>
        <VerticalTimeline>
          {experiences.map((experience, experienceIndex) => (
            <ExperienceCard
              {...{
                key: `experience-${experienceIndex}`,
                experience,
                experienceIndex,
              }}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div {...{ className: "mt-20 flex flex-col text-center" }}>
        <h3 {...{ className: styles.sectionHeadText }}>
          {`${i18n.t("experience.learnmore")}`}
        </h3>
        <div
          {...{
            className: `${styles.sectionSubText} mt-5 flex gap-5 justify-center items-center flex-col`,
          }}
        >
          <a
            {...{
              href: "https://www.linkedin.com/in/hamzabenjannet",
              className: "flex flex-row items-center gap-2 underline",
            }}
          >
            <BsLinkedin />
            {`${i18n.t("experience.checkmylinkedin")}`}
          </a>
          <span>{i18n.t("experience.or")}</span>
          <a
            {...{
              href: "https://github.com/hamzabenjannet",
              className: "flex flex-row items-center gap-2 underline",
            }}
          >
            <BsGithub />
            {`${i18n.t("experience.hoptomygithub")}`}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SectionWrapper(Experience, "Experience");
