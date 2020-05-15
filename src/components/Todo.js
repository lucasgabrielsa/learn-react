import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  { description: "Lavar a garagem", isDone: false },
  { description: "Estidar React", isDone: false },
  { description: "Earn a lof of money", isDone: true },
];
const styles = { listStyleType: "none" };

function Todo() {
  const todosItens = todos.map((item, index) => (
    <TodoItem key={index} task={item} />
  ));

  return (
    <form>
      <div className="form-group">
        <h3>Things todo...</h3>
        <ul style={styles}>{todosItens}</ul>
      </div>
    </form>
  );
}

export default Todo;
