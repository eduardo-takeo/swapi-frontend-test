import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";

import "./global.scss";
import { FilmsContextProvider } from "./contexts/FilmsContext";

ReactDOM.render(
  <React.StrictMode>
    <FilmsContextProvider>
      <Main />
    </FilmsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
