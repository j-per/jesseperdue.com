import React from "react";
import Navigation from "./Navigation";
import JumbotronHeader from "./JumbotronHeader";
import Expertise from "./Expertise";
import About from "./About";
import Footer from "./Footer";
import AboutOverlap from "./AboutOverlap";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Social from "./Social";

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
      </div>
    );
  }
}

export default App;
