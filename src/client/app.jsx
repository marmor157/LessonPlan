import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import HorizontalMenu from "./components/HorizontalMenu";
import "./fontawesome";
import "./styles/main.scss";
import FullScreenPane from "./components/FullScreenPane";

export default () => {
  const [paneShow, setPaneShow] = useState(true);

  return (
    <div className="container">
      <MainScreen />
      <HorizontalMenu />
      <FullScreenPane
        title="Title"
        show={paneShow}
        onClose={() => setPaneShow(!paneShow)}
      >
        Hahah
      </FullScreenPane>
    </div>
  );
};
