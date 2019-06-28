import React, { Component } from "react";

class Navigation extends Component {
  render() {
    let styles = {
        fontSize: '30px',
        color: 'white'
      }

    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
          <a className="navbar-brand Navigation" style={styles}>VidZee</a>
            <li style={{color: 'white'}}>Browse</li>
            <li style={{color: 'white'}}>My list</li>
            <li style={{color: 'white'}}>Top picks</li>
            <li style={{color: 'white'}}>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
