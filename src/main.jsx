import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//After React completes DOM render, initialize original script:
if (window.initSite) {
  // after a small timeout, to guarantee render completion
  setTimeout(() => {
    window.initSite();
  }, 50);
}
