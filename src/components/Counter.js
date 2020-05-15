import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.mostrarNome = this.mostrarNome.bind(this);
  }

  mostrarNome = (nome, e) => {
    console.log("nome", nome);
  };

  incrementCounter = (e) => {
    console.log("e", e);
    e.preventDefault();
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <br />

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.incrementCounter}
        >
          Increment
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={this.mostrarNome.bind(this, "Lucas Gabriel")}
        >
          Mostre o Nome
        </button>
      </div>
    );
  }
}

export default Counter;
