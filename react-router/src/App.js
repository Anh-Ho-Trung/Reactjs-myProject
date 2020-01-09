import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        <FooterPage />
      </div>
    );
  }
}

class HeaderPage extends React.Component {
  render() {
    return (
      <div>
        <h1>HeaderPage</h1>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

class contact extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

class FooterPage extends React.Component {
  render() {
    return (
      <div>
        <h1>HeaderPage</h1>
      </div>
    );
  }
}

export default App;
