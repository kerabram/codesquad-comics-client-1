import React, { useState } from 'react' //Kit: you should have React imported
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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

function App() {
  return ( 
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Login />
        <Signup />
        <Admin />
        <Create />
        <Update />
      </main>
      <Footer />
    </div>
  );
}

export default App
