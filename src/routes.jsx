import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./Pages/Start/App.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>} />
    </Routes>
  </BrowserRouter>
);
