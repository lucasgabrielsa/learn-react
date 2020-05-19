import React from "react";

class People extends React.Component {
  constructor() {
    super();
    this.state = { character: {}, loading: false };
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            character: data,
            loading: false,
          };
        });
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h1>People Component</h1>
        <hr />
        <p>{this.state.loading ? "Loading..." : this.state.character.name}</p>
      </div>
    );
  }
}

export default People;
