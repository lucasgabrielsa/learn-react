import React from "react";

function FormContainer(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div class="form-group">
        <label>
          Nome:
          <input
            type="text"
            className="form-control"
            name="nome"
            value={props.data.nome}
            onChange={props.handleChange}
          />
        </label>
      </div>

      <div class="form-group">
        <label>
          Trabalha como Desenvolvedor?
          <input
            name="isDeveloper"
            type="checkbox"
            checked={props.data.isDeveloper}
            onChange={props.handleChange}
          />
        </label>
      </div>

      <div class="form-group">
        <label>
          Dissertação:
          <textarea
            className="form-control"
            name="texto"
            value={props.data.texto}
            onChange={props.handleChange}
          />
        </label>
      </div>

      <div class="form-group">
        <label>
          Escolha o favorito
          <select
            className="form-control"
            name="selecao"
            value={props.data.selecao}
            onChange={props.handleChange}
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
        Nome: {props.data.nome} <br />
        TextArea: {props.data.texto}
        <br />
        Selecao: {props.data.selecao}
        <br />
        Desenvolvedor?: {props.data.isDeveloper ? "true" : "false"}
      </p>
    </form>
  );
}

export default FormContainer;
