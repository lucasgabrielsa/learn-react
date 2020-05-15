import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Teste from "./Teste";
import PersonalInfo from "./components/PersonalInfo";
import Jokes from "./components/Jokes";
import Product from "./components/products/Product";
import Products from "./components/products/Products";
import SimpleAlert from "./components/SimpleAlert";
import Todo from "./components/Todo";
import SimpleClassComponent from "./components/SimpleClassComponent";

ReactDOM.render(
  <React.StrictMode>
    {/* <PersonalInfo /> */}
    {/* <Jokes /> */}
    {/* <Products /> */}
    {/* <SimpleAlert /> */}
    {/* <Todo /> */}
    <SimpleClassComponent name="Lucas Gabriel" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
