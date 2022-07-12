import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginForm from "./login/LoginForm";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import NutritionPage from "./nutrition/NutritionPage";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Container
        maxWidth={false}
        sx={{ backgroundColor: "Orange", flexGrow: 1 }}
      >
        my Container
      </Container> */}
    </>
  );
}
