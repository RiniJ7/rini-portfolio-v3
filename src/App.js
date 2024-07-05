import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
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
      <Projects />
      <Experience />
      <About />
      {/* <ContactUs /> */}
      <Footer />

    </>
  );
}

export default App;
