import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./providers/AuthContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {" "}
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
