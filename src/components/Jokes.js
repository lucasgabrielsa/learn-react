import React from "react";
import Joke from "./Joke";

function Jokes() {
  return (
    <div>
      <Joke
        question="yes"
        punchLine="What the priest said to the police officer?"
      />
      <br />
      <Joke punchLine="Some bad joke" />
      <br />
      <Joke question="yes" punchLine="What the best way to learn english?" />
    </div>
  );
}

export default Jokes;
