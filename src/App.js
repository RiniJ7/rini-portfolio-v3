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

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Experience from "./components/Experience";

function App() {
  return (
<>
      <Sidenav />
      <Main />
      <Experience />
      <About />
      <Portfolio />
      {/* Add education here */}
      <Testimonials />
      <ContactUs />
      <Footer />

    </>
  );
}

export default App;
