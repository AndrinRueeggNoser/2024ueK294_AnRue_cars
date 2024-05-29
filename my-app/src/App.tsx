import { useState } from 'react'
import './App.css'
import LoginPage from "./components/Pages/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarPage from "./components/Pages/CarPage";
import EditPage from "./components/Pages/EditPage";
import ViewPage from './components/Pages/ViewPage';
import AddPage from './components/Pages/AddPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cars" element={<CarPage />} />
          <Route path="edit/:id" element={<EditPage />} />
          <Route path="cars/:id" element={<ViewPage />} />
          <Route path="add" element={<AddPage />} />
       
a
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App