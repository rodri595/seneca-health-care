import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WOW from 'wowjs';


import "./assets/css/bootstrap-5.0.5-alpha.min.css"
import "./assets/css/LineIcons.2.0.css"
import "./assets/css/animate.css"
import "./assets/css/main.css"

//pages
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contactus from "./components/pages/contact/Contactus";
import Service from "./components/pages/service/Service";
import Team from "./components/pages/team/Team";
 
class App extends Component {

  componentDidMount() {
    new WOW.WOW({
        live: true
    }).init();
}
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/team" component={Team} />
      </Router>
    );
  }
}

export default App;