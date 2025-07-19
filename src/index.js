import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { InventoryProvider } from "./context/InventoryContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </HashRouter>
);