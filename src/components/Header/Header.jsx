import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <a href="/">
            <h1>Steven Remenapp</h1>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
