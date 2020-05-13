import React from "react";

const itens = [
  "Learn React",
  "Learn Go",
  "Move to the Netherlands",
  "Improve my English",
  "Enjoy life with my family",
];

function Teste() {
  return (
    <div>
      <h3>Things to do..</h3>
      <ul>
        {itens.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Teste;
