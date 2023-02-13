import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { globalStyles } from "./stitches.config";
import ResumeContextProvider from "./contexts/resumeContext";

globalStyles();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeContextProvider>
        <App />
      </ResumeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
