import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes";
import ErrorBoundary from "./context/ErrorBoundary";
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </AppProvider>
  </React.StrictMode>
);
