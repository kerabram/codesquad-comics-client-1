import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// Components
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

// Shared Layout
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Routes, Route } from "react-router-dom";
import "react-router-dom";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <>
      <Header user={user} setUser={setUser} />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update/:userId" element={<Update user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;