import React from "react";

function RenderIcon({ Icon: src, ...props } = {}) {
  try {
    const RendererTag = typeof Icon === "function" ? Icon : "img";
    return (
      <RendererTag
        {...{
          ...props,
          src,
        }}
      />
    );
  } catch (error) {
    console.error(`error RenderIcon`, error);
    return (
      <div>
        <p>{`error RenderIcon`}</p>
        <p>{error?.message || `error RenderIcon`}</p>
      </div>
    );
  }
}

export default RenderIcon;
