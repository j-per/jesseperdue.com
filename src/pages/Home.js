import React from "react";
import Navigation from "../components/Home/Navigation";
import JumbotronHeader from "../components/Home/JumbotronHeader";
import Expertise from "../components/Home/Expertise";
import About from "../components/Home/About";
import AboutOverlap from "../components/Home/AboutOverlap";
import Portfolio from "../components/Home/Portfolio";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

import NewNav from "../components/Home/NewNav";

class Home extends React.Component {
  render() {
    return (
      <div>
        <JumbotronHeader />
        <Expertise />
        <About />
        <AboutOverlap />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
