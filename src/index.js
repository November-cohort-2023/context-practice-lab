import { ThemeProviderWrapper } from "./context/Theme.context";
import { UserProviderWrapper } from "./context/User.context";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
 
import { BrowserRouter as Router } from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <UserProviderWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </UserProviderWrapper>
    </Router>
  </React.StrictMode>
);
 
reportWebVitals();
