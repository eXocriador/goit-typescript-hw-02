import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
