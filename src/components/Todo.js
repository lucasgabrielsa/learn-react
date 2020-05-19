import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: "Lavar a garagem", isDone: false },
        { id: 2, description: "Estidar React", isDone: false },
        { id: 3, description: "Earn a lof of money", isDone: false },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(indice) {
    console.log("indice", indice);

    const newTodos = [...this.state.todos];
    newTodos[indice].isDone = !newTodos[indice].isDone;

    console.log("newTodos", newTodos);

    this.setState((prevState) => {
      return {
        todos: newTodos,
        ...prevState,
      };
    });
  }

  countTasksCompleted() {
    return this.state.todos.filter((i) => i.isDone === true).length;
  }

  render() {
    const styles = { listStyleType: "none" };

    const todosItens = this.state.todos.map((item, index) => (
      <div key={index} className="card" style={{ width: "150", height: 50 }}>
        <TodoItem
          task={item}
          indice={index}
          onHandleCheckClick={this.handleClick}
        />
      </div>
    ));

    return (
      <form>
        <div className="form-group">
          <h3>Things todo...</h3>
          <ul style={styles}>{todosItens}</ul>
          <hr />
          <h3>{this.state.todos.length} task(s) register</h3>
          <h3>{this.countTasksCompleted()} task(s) done</h3>
        </div>
      </form>
    );
  }
}

export default Todo;
