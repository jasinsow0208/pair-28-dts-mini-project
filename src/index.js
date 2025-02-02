import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import ProfilePage from "./containers/ProfilePage";
import HomePage from "./containers/HomePage";
import MovieSelectedPage from "./containers/MovieSelectedPage";
import MoviePlayerPage from "./containers/MoviePlayerPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route
          path="Home"
          element={
            <ProtectedComponent loginOnly={true}>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="MovieSelected/:id"
          element={
            <ProtectedComponent loginOnly={true}>
              <MovieSelectedPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="MoviePlayer"
          element={
            <ProtectedComponent loginOnly={true}>
              <MoviePlayerPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedComponent loginOnly={false}>
              <LoginPage />
            </ProtectedComponent>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedComponent loginOnly={false}>
              <RegisterPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
