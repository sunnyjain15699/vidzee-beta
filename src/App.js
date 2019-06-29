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
          <Route path="/movies" component={MoviesPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
