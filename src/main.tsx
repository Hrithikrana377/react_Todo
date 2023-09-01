/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css"
import { TodosProvider } from "./store/todos";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <TodosProvider>
        <App />
      </TodosProvider>
    </React.StrictMode>
  </BrowserRouter>
);
