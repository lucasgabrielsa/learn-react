import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  { description: "Lavar a garagem", isDone: false },
  { description: "Estidar React", isDone: false },
  { description: "Earn a lof of money", isDone: true },
];
const styles = { listStyleType: "none" };

function Todo() {
  return (
    <form>
      <div className="form-group">
        <h3>Things todo...</h3>
        <ul style={styles}>
          {todos.map((item, index) => {
            return <TodoItem key={index} task={item} />;

            // return (
            //   <li key={index}>
            //     <input type="checkbox" value={item} />
            //     <span style={{ paddingLeft: "10px" }}>{item}</span>
            //   </li>
            // );
          })}
        </ul>
      </div>
    </form>
  );
}

export default Todo;
