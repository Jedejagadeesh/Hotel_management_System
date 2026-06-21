import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import HotelProvider from "./context/HotelContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <HotelProvider>
      <App />
    </HotelProvider>
  </HashRouter>
);