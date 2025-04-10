import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.css";
import "./assets/styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
