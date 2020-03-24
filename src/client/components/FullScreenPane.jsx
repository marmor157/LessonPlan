import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FullScreenPane extends Component {
  render() {
    const { show, title, children, onClose } = this.props;
    const className = show
      ? "fullScreenPane fullScreenPane--show"
      : "fullScreenPane";

    return (
      <div className={className}>
        <div className="fullScreenPane__header">
          <span className="fullScreenPane__header__title">{title}</span>
          <span className="fullScreenPane__header__exitButton">
            <FontAwesomeIcon icon="times" onClick={onClose} />
          </span>
        </div>
        <div className="fullScreenPane__container">{children}</div>
      </div>
    );
  }
}

export default FullScreenPane;
