import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FirstStateComponent from "./components/FirstStateComponent";
import LogUser from "./components/LogUser";
import Todo from "./components/Todo";
import EventTest from "./components/EventTest";
import Counter from "./components/Counter";

ReactDOM.render(
  <React.StrictMode>
    {/* /<FirstStateComponent /> */}
    {/* <LogUser isUserLogged="true" /> */}
    {/* <Todo /> */}
    {/* <EventTest /> */}
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
