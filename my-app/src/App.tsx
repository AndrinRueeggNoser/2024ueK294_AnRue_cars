import { useState } from 'react'
import './App.css'
import LoginPage from "./components/Pages/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarPage from "./components/Pages/CarPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="car" element={<CarPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App