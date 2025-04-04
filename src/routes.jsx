import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./Pages/Start/App.jsx";

import AuthLayout from "./Pages/Auth/Layout/AuthLayout.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";
import Register from "./Pages/Auth/Register/Register.jsx";
import VerifyEmail from "./Pages/Auth/VerifyEmail/VerifyEmail.jsx";

import MainLayout from "./Pages/App/Layout/AppLayout.jsx";
import Feed from "./Pages/App/Feed/Feed.jsx";

import Profile from "./Pages/App/Profile/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verify_email" element={<VerifyEmail />}></Route>
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/feed" element={<Feed />}></Route>

        <Route path="/profile">
          <Route path=":tag" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
