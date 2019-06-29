import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./search";

class Navigation extends Component {
  render() {
    let styles = {
      fontSize: "30px",
      color: "white",
      cursor: "pointer"
    };

    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <a className="navbar-brand Navigation" style={styles}>
              VidZee
            </a>
            <NavLink style={{ color: "white" }}><li>Browse</li></NavLink>
            <Search
              keyUp={this.props.keyUp}
              onChange={this.props.onChange}
              searchTerm={this.props.searchTerm}
            />
            <NavLink style={{ color: "white" }} to='/login'><li>Sign In</li></NavLink>
            <NavLink style={{ color: "white" }} to='/register'><li>Sign Up</li></NavLink>            
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
