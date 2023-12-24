import { BallCanvas } from "./canvas";
import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

function Technologies() {
  return (
    <div
      {...{
        className: "hidden md:flex",
      }}
    >
      <div
        {...{
          className: "flex flex-row flex-wrap justify-center gap-10",
        }}
      >
        {technologies.map((technology) => (
          <div
            {...{
              key: technology.name,
              className: "w-28 h-28",
              title: `${technology?.name || ""}`,
            }}
          >
            <BallCanvas
              {...{
                icon: technology.icon,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Technologies, "Technologies");
