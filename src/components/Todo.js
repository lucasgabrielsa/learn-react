import React from "react";

const todos = ["Lavar a garagem", "Estudar React", "Earn a lot of money"];

function Todo() {
  return (
    <div>
      <h3>Things todo...</h3>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" value={item} />
              <span style={{ paddingLeft: "10px" }}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
