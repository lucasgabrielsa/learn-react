import React from "react";

function TodoItem(props) {
  console.log("props", props);
  return (
    <div className="form-check">
      <li>
        <input
          type="checkbox"
          defaultChecked={props.task.isDone}
          className="form-check-input"
        />
        <label className="form-check-label">{props.task.description}</label>
      </li>
    </div>
  );
}

export default TodoItem;
