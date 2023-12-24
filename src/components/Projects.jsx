import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";
import React from "react";
import RenderSectionHeder from "./RenderSectionHeder";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { styles } from "../constants";
import { useTranslation } from "react-i18next";

function Projects() {
  const { i18n } = useTranslation();
  return (
    <div {...{ className: "flex flex-row flex-wrap gap-10" }}>
      <div variants={textVariant()}>
        <RenderSectionHeder
          {...{
            label: `${i18n.t("projects.label")}`,
            title: `${i18n.t("projects.title")}`,
          }}
        />
      </div>
      <div {...{ className: "w-full flex" }}>
        <p
          {...{
            variants: fadeIn("up", "spring", 0.1, 1),
            className:
              "mt-3 text-secondary text-[17px] max-w-4xl leading-[30px] text-justify",
          }}
        >
          {`${i18n.t("projects.description")}`}
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            {...{
              key: `project-${index}`,
              index,
              ...project,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Projects, "Projects");
