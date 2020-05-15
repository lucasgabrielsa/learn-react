import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { description: "Lavar a garagem", isDone: false },
        { description: "Estidar React", isDone: false },
        { description: "Earn a lof of money", isDone: true },
      ],
    };
  }

  handleClick = (item, event) => {
    console.log("item", item);
    console.log("event", event);
  };

  render() {
    const styles = { listStyleType: "none" };

    const todosItens = this.state.todos.map((item, index) => (
      <div key={index} className="card" style={{ width: "150", height: 50 }}>
        <TodoItem task={item} onClick={this.handleClick(item)} />
      </div>
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
}

export default Todo;
