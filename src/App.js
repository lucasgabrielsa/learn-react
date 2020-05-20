import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import PersonalInfo from "./components/PersonalInfo";
import Topics from "./components/Topics";

export default function App() {
  return (
    <Router>
      <div></div>
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/personal">PerfonalInfo</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/personal">
          <PersonalInfo />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </Router>
  );
}
