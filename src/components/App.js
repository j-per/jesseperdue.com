import React from "react";
import Navigation from "./Navigation";
import JumbotronHeader from "./JumbotronHeader";
import Expertise from "./Expertise";
import About from "./About";
import AboutOverlap from "./AboutOverlap";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
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

export default App;
