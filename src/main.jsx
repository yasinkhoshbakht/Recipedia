import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FoodDataProvider from "./Contexts/foodDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FoodDataProvider>
  </StrictMode>
);
