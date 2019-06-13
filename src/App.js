import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

class App extends React.Component {
  render() {
    return (
      <Router className="test">
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id/:slug" component={BlogDetails} />
      </Router>
    );
  }
}

export default App;
