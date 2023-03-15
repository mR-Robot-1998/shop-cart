/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Social extends Component {
  render() {
    let { href, img } = this.props;
    return (
      <li>
        <a href={href} target="_blank">
          <img src={img} />
        </a>
      </li>
    );
  }
}
