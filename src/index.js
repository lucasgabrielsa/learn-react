import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SimpleHook from "./components/hooks/SimpleHook";
import SimpleEffect from "./components/effects/SimpleEffect";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHook />
    <hr />
    <SimpleEffect />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
