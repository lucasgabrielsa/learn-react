import React from "react";

class SimpleClassComponent extends React.Component {
  render() {
    console.log("props", this.props);
    return <div>SimpleClassComponent my name prop: {this.props.name}</div>;
  }
}

export default SimpleClassComponent;
