import React from "react";
import Navigation from "../components/Navigation";
import JumbotronHeader from "../components//JumbotronHeader";
import Expertise from "../components//Expertise";
import About from "../components//About";
import AboutOverlap from "../components//AboutOverlap";
import Contact from "../components//Contact";
import Footer from "../components//Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <JumbotronHeader />
        <Expertise />
        <About />
        <AboutOverlap />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
