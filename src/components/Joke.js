import React from "react";

function Joke(props) {
  const isQuestion = props.question;

  return (
    <div>
      <h3>
        {isQuestion != null && <span>Question:</span>} {props.punchLine}
      </h3>
    </div>
  );
}

export default Joke;
