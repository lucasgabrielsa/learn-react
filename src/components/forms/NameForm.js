import React from "react";

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      texto: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

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
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label>
            Nome:
            <input
              type="text"
              className="form-control"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Dissertação:
            <textarea
              className="form-control"
              name="texto"
              value={this.state.texto}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default NameForm;
