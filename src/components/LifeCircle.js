import React from "react";

class LifeCircle extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    /* Normal place to make http requests */
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    /* When this components receive props or update props */
    if (nextProps.whatever !== this.props.whatever) {
      console.log("do something");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return true if want it to update
    //return false if not

    //do you logic to make the component update more inteligent

    return false;
  }

  componentWillUnmount() {
    //unsubscribe something
  }

  render() {
    const htmlReturn = (
      <div>
        <h2>Code goes here!</h2>
      </div>
    );
    return htmlReturn;
  }
}

export default LifeCircle;
