import React from "react";
import Header from "./Header";
import JumbotronHeader from "./JumbotronHeader";
import Expertise from "./Expertise";
import About from "./About";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import AboutOverlap from "./AboutOverlap";
import Portfolio from "./Portfolio";
import Blog from "./Blog";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <JumbotronHeader />
        <Expertise />
        <About />
        <AboutOverlap />
        <Portfolio />
        <Blog />
      </div>
    );
  }
}

export default App;
