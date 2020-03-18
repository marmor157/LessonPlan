import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Option.scss";

export default class Option extends PureComponent {
  render() {
    const { text, faIconName } = this.props;
    return (
      <div className="option">
        <div className="text">{text}</div>
        <div className="icon">
          <FontAwesomeIcon icon={faIconName} />
        </div>
      </div>
    );
  }
}
