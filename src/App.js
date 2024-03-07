import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
// import resumeData from "./resumeData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
