import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import JumbotronHeader from "./JumbotronHeader";
import Expertise from "./Expertise";
import About from "./About";
import AboutOverlap from "./AboutOverlap";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <JumbotronHeader />
        <Expertise />
        <About />
        <AboutOverlap />
        <Portfolio />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Home;
