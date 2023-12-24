import React from "react";
import RenderIcon from "./RenderIcon";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTranslation } from "react-i18next";

function ExperienceCard({ experience, experienceIndex } = {}) {
  const { i18n } = useTranslation();

  const icon = (
    <div
      {...{
        className: "flex justify-center items-center w-full h-full",
      }}
    >
      <RenderIcon
        {...{
          Icon: experience.icon,
          className: "w-[60%] h-[60%] object-contain",
          alt: `${i18n.t(
            `experience.experienceCard.${experienceIndex}.company_name`,
            {
              defaultValue: experience.company_name,
            }
          )}`,
        }}
      />
    </div>
  );

  return (
    <VerticalTimelineElement
      {...{
        contentStyle: {
          background: "#134e4a",
          color: "#fff",
        },
        contentArrowStyle: { borderRight: "7px solid  #232631" },
        date: `${i18n.t(`experience.experienceCard.${experienceIndex}.date`, {
          defaultValue: experience.date,
        })}`,
        iconStyle: { background: experience.iconBg },
        icon,
      }}
    >
      <div>
        <h3 {...{ className: "text-white text-[24px] font-bold" }}>
          {`${i18n.t(`experience.experienceCard.${experienceIndex}.title`, {
            defaultValue: experience.title,
          })}`}
        </h3>
        <p
          {...{
            className: "text-secondary text-[16px] font-semibold",
            style: { margin: 0 },
          }}
        >
          {`${i18n.t(
            `experience.experienceCard.${experienceIndex}.company_name`,
            {
              defaultValue: experience.company_name,
            }
          )}`}
        </p>
      </div>

      <ul
        {...{
          className: "mt-5 list-disc ml-5 space-y-2",
        }}
      >
        {experience.points.map((point, index) => (
          <li
            {...{
              key: `experience-point-${index}`,
              className: "text-white-100 text-[14px] pl-1 tracking-wider",
            }}
          >
            {`${i18n.t(
              `experience.experienceCard.${experienceIndex}.points.${index}`,
              {
                defaultValue: point,
              }
            )}`}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
