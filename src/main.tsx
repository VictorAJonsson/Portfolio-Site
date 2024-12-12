import React from "react";
import ReactDOM from "react-dom/client";
import { PresentationLayer } from "./presentation/PresentationLayer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PresentationLayer />
  </React.StrictMode>
);
