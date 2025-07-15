import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Services from "./pages/Services";
import Process from "./pages/Process";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("hi");

  return (
    <Router>
      <Navbar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/benefits" element={<Benefits language={language} />} />
        <Route path="/services" element={<Services language={language} />} />
        <Route path="/process" element={<Process language={language} />} />
        <Route path="/faq" element={<FAQ language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>
      <Footer language={language} setLanguage={setLanguage}/>
    </Router>
  );
};

export default App;