import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  show: boolean;
  title: string;
  children: React.ReactChild;
  onClose: () => void;
}

export const FullScreenPane = ({ show, title, children, onClose }: Props) => {
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
};

export default FullScreenPane;
