import React from "react";
import FormContainer from "./FormContainer";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      texto: "",
      selecao: "",
      isDeveloper: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // const { name, value } = event.target;
    // const finalValue = name === "isDeveloper" ? event.target.checked : value;

    const target = event.target;
    const value = target.name === "isDeveloper" ? target.checked : target.value;
    const { name } = target;

    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  handleSubmit(event) {
    alert("Nome:" + this.state.nome + " / Texto:" + this.state.texto);
    event.preventDefault();
  }

  render() {
    return (
      <FormContainer
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormComponent;
