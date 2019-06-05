import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error from "./components/Error";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
      </Router>
    );
  }
}

export default App;
