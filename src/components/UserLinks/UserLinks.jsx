import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { config } = this.props;
    const { labeled } = this.props;
    return config.userLinks.map(link => (
      <a href={link.url} key={link.label} target={link.targetBlank ? "_blank" : "_self"} rel={link.targetBlank ? "noopener noreferrer" : ""}>
        <button type="button" key={link.label}>
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { config } = this.props;
    if (!config.userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
