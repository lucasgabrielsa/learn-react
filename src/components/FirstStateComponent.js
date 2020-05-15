import React from "react";

import SimpleClassComponent from "./SimpleClassComponent";

class FirstStateComponent extends React.Component {
  constructor() {
    super();
    this.state = { answer: "Yes" };
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        First State Component, The answer is {this.state.answer} <hr />
        <SimpleClassComponent name={this.state.answer} />
      </div>
    );
  }
}

export default FirstStateComponent;
