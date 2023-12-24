import { BsChevronCompactDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import React from "react";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

function ProjectCard({ index, name, description, tags, image, project_link }) {
  const { i18n } = useTranslation();
  const project_name = i18n.t(`projects.projectCard.name.${index}`, {
    defaultValue: name,
  });
  const descriptionParagraphRef = React.useRef(null);

  const [cmpState, setCmpState] = React.useState({
    displayReadMoreButton: false,
    showFullDescription: false,
  });

  React.useEffect(() => {
    const displayReadMoreButton =
      descriptionParagraphRef?.current?.offsetHeight <
      descriptionParagraphRef?.current?.scrollHeight;
    setCmpState((prevCmpState) => ({
      ...prevCmpState,
      displayReadMoreButton,
    }));
  }, [descriptionParagraphRef]);

  React.useEffect(() => {
    descriptionParagraphRef.current.style = {
      ...descriptionParagraphRef.current.style,
      height: `${descriptionParagraphRef.current.initialHeight}px`,
      [`-webkit-line-clamp`]: `${descriptionParagraphRef.current.lineClamp}`,
    };

    cmpState.showFullDescription &&
      (() => {
        descriptionParagraphRef.current.initialHeight =
          descriptionParagraphRef.current.offsetHeight;
        descriptionParagraphRef.current.lineClamp =
          descriptionParagraphRef.current.style[`-webkit-line-clamp`];

        descriptionParagraphRef.current.style.height = `${descriptionParagraphRef.current.scrollHeight}px`;
        descriptionParagraphRef.current.style[`-webkit-line-clamp`] = `unset`;
      })();
  }, [cmpState.showFullDescription]);

  return (
    <div
      {...{
        variants: fadeIn("up", "spring", index * 0.5, 0.75),
      }}
    >
      <Tilt
        {...{
          options: {
            max: 45,
            scale: 1,
            speed: 450,
          },
          className:
            "bg-tertiary-0 p-5 rounded-2xl sm:w-[360px] w-full bg-transparent-to-white-gradient",
        }}
      >
        <div
          {...{
            className:
              "relative w-full h-[230px] bg-secondary rounded-2xl transition-1s-all-ease-in-out",
            style: {
              ...(cmpState?.showFullDescription
                ? {
                    height: "100px",
                  }
                : {}),
            },
          }}
        >
          <img
            {...{
              title: `${i18n.t(`projects.projectCard.name.${index}`, {
                defaultValue: project_name,
              })}`,
              src: image,
              alt: `${i18n.t("projects.projectCard.image.alt", {
                project_name,
              })}`,
              className: "w-full h-full object-cover rounded-2xl",
            }}
          />

          {project_link !== "#" && (
            <div
              {...{
                className:
                  "absolute inset-0 flex justify-end m-3 card-img_hover",
              }}
            >
              <button
                {...{
                  title: `${i18n.t("projects.projectCard.link.title", {
                    project_name,
                  })}`,
                  onClick: () => window.open(project_link, "_blank"),
                  className:
                    "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",
                }}
              >
                <BsLink45Deg
                  {...{ className: "w-1/2 h-1/2 object-contain text-white" }}
                />
              </button>
            </div>
          )}
        </div>

        <div {...{ className: "mt-5" }}>
          <h3
            {...{
              title: `${i18n.t(`projects.projectCard.name.${index}`, {
                defaultValue: project_name,
              })}`,
              className: "text-white font-bold text-[24px]",
            }}
          >
            {i18n.t(`projects.projectCard.name.${index}`, {
              defaultValue: project_name,
            })}
          </h3>
          <p
            {...{
              ref: descriptionParagraphRef,
              title: `${i18n.t("projects.projectCard.description.title", {
                project_name: i18n.t(`projects.projectCard.name.${index}`, {
                  defaultValue: project_name,
                }),
              })}`,
              className:
                "mt-2 text-secondary text-[14px] transition-1s-all-ease-in-out ellipsis",
            }}
          >
            {i18n.t(`projects.projectCard.description.${index}`, {
              defaultValue: description,
            })}
          </p>
          {cmpState.displayReadMoreButton && (
            <button
              {...{
                title: `${i18n.t(
                  cmpState.showFullDescription
                    ? "projects.projectCard.description.button.less.title"
                    : "projects.projectCard.description.button.more.title",

                  {
                    project_name,
                  }
                )}`,
                onClick: () => {
                  setCmpState((prevCmpState) => ({
                    ...prevCmpState,
                    showFullDescription: !prevCmpState.showFullDescription,
                  }));
                },
                className:
                  "bg-tertiary-0 text-white text-[12px] hover:bg-tertiary-1",
              }}
            >
              {cmpState.showFullDescription ? (
                <BsChevronCompactUp {...{ className: "w-4 h-4" }} />
              ) : (
                <BsChevronCompactDown {...{ className: "w-4 h-4" }} />
              )}
            </button>
          )}
        </div>

        <div {...{ className: "mt-4 flex flex-wrap gap-2" }}>
          {tags.map((tag) => (
            <p
              {...{
                title: tag.name,
                key: `${project_name}-${tag.name}`,
                className: `text-[14px] ${tag.color}`,
              }}
            >
              {`#${tag.name}`}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
}

export default ProjectCard;
