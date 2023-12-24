import React from "react";
import { styles } from "../constants";

function RenderSectionHeder({ label = "", title = "e" } = {}) {
  return (
    <React.Fragment>
      <p
        {...{
          className: styles.sectionSubText,
        }}
      >
        {label || "--label--"}
      </p>
      <h2
        {...{
          className: styles.sectionHeadText,
        }}
      >
        {title || "--title--"}
      </h2>
    </React.Fragment>
  );
}

export default RenderSectionHeder;
