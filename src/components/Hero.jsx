import RenderHtmlComponents from "../utils/RenderHtmlComponents";
import { styles } from "../constants";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { i18n } = useTranslation();

  return (
    <div
      {...{
        id: `DivHeroContainer`,
        className:
          "transition-1s-all-ease-in-out bg-cover bg-no-repeat bg-center fractals",
      }}
    >
      <section
        {...{
          className: "w-full h-screen0 mx-auto",
        }}
      >
        <div
          {...{
            className: `pt-40 inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5 ${styles.paddingX}`,
          }}
        >
          <div
            {...{
              className: "flex flex-col justify-center items-center mt-5",
            }}
          >
            <div
              {...{
                className: "w-5 h-5 rounded-full bg-[#affeff]",
              }}
            />
            <div
              {...{
                className: "w-1 sm:h-80 h-40 cyan-gradient",
              }}
            />
          </div>

          <div>
            <h1
              {...{
                className: `text-white ${styles.heroHeadText}`,
              }}
            >
              {[
                <span>{i18n.t(`hero.title.part.0`)}</span>,
                <span
                  {...{
                    className: "text-[#affeff]",
                  }}
                >
                  {i18n.t(`hero.title.part.1`)}
                </span>,
              ].map(RenderHtmlComponents)}
            </h1>
            <p {...{ className: `${styles.heroSubText} mt-2 text-white-100` }}>
              {[
                <span>{i18n.t(`hero.description.part.0`)}</span>,
                <br {...{ className: "sm:block" }} />,
                <span>{i18n.t(`hero.description.part.1`)}</span>,
              ].map(RenderHtmlComponents)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
