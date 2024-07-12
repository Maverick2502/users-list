import React from "react";
import ReactDOM from "react-dom/client";
import UsersPage from "./pages/users";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersPage />
  </React.StrictMode>
);