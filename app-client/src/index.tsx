import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <Provider store={store()}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept();
}
