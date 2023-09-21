import React, { useState, useEffect} from "react";
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Event from "./components/Events/Event";
import About from "./components/About/About";
import Footer from "./components/Footer";
import _404 from "./components/_404";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import Contact from "./components/Contact/Contact";


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Event />} />
          <Route path="*" element={<Navigate to="/"/>} />
          {/* <Route path="*" element={<_404/>} /> */}
        </Routes>
        <Fab style={{
          position:'fixed',
          bottom:'20px',
          right:'20px',
        }} 
        color="primary" aria-label="add">
        <ArrowUpwardIcon />
      </Fab>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
