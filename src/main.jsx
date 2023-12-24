import "css-paint-polyfill";
import "./index.css";
import "./lang";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const appRoot = document.getElementById(`appRoot`);

if (!appRoot) {
  throw new Error(`No element with id "appRoot" found in index.html`);
}
ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <App
      {...{
        id: `appRootApp`,
      }}
    />
  </React.StrictMode>
);
