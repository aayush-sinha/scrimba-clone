import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Discord from "./components/Discord";
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Features />
    <Skills />
    <Courses />
    <Discord />
    </>
  );
}

export default App;
