import React from "react";

class NameForm extends React.Component {
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
            Trabalha como Desenvolvedor?
            <input
              name="isDeveloper"
              type="checkbox"
              checked={this.state.isDeveloper}
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

        <div class="form-group">
          <label>
            Escolha o favorito
            <select
              className="form-control"
              name="selecao"
              value={this.state.selecao}
              onChange={this.handleChange}
            >
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
        <br />
        <p>
          Nome: {this.state.nome} <br />
          TextArea: {this.state.texto}
          <br />
          Selecao: {this.state.selecao}
          <br />
          Desenvolvedor?: {this.state.isDeveloper ? "true" : "false"}
        </p>
      </form>
    );
  }
}

export default NameForm;
