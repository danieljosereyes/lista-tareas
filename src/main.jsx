import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App></App>
    </TaskContextProvider>
  </React.StrictMode>
);
