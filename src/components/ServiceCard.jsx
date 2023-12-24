import React from "react";
import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ServiceCard({ index, title, icon } = {}) {
  const { i18n } = useTranslation();

  return (
    <Tilt {...{ className: "xs:w-[250px] w-full" }}>
      <motion.div
        {...{
          variants: fadeIn("right", "spring", index * 0.5, 0.75),
          className:
            "w-full green-pink-gradient-ignore green-cyan-gradient p-[1px] rounded-[20px] shadow-card",
        }}
      >
        <div
          {...{
            options: {
              max: 45,
              scale: 1,
              speed: 450,
            },
            className:
              " rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",
          }}
        >
          <img
            {...{
              src: icon,
              alt: title ?? "Service card preview",
              className: "w-50 h-50 object-contain",
            }}
          />

          <h3
            {...{ className: "text-white text-[20px] font-bold text-center" }}
          >
            {i18n.t(`serviceCard.service.title.${index}`, {
              defaultValue: title,
            })}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
