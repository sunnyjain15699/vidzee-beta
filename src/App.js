import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesPage from "./components/moviesPage";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={MoviesPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
