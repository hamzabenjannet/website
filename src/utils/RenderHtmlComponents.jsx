import React from "react";
import RenderError from "./handleError/RenderError";
import { useTranslation } from "react-i18next";

function RenderHtmlComponents(content, contentIndex) {
  const { i18n } = useTranslation();
  try {
    return (
      <React.Fragment key={contentIndex}>
        {i18n.t(content, { defaultValue: content })}
      </React.Fragment>
    );
  } catch (error) {
    return <RenderError {...{ error }} />;
  }
}

export default RenderHtmlComponents;
