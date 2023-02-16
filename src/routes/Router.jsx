import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage/DetailPage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;