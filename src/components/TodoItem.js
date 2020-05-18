import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(indice) {
    //event.preventDefault();
    this.props.onHandleCheckClick(indice);
  }

  render() {
    return (
      <div className="form-check">
        <li>
          <input
            type="checkbox"
            checked={this.props.task.isDone}
            defaultChecked={this.props.task.isDone}
            className="form-check-input"
            onClick={() => this.handleClick(this.props.indice)}
          />
          <label className="form-check-label">
            {this.props.task.description}
          </label>
        </li>
      </div>
    );
  }
}

export default TodoItem;
