import React from "react";
import Navigation from "../components/Home/Navigation";
import JumbotronHeader from "../components/Home/JumbotronHeader";
import Expertise from "../components/Home/Expertise";
import About from "../components/Home/About";
import AboutOverlap from "../components/Home/AboutOverlap";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

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
