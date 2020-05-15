import React from "react";

function Product(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200/300"
        alt="Imagem de capa do card"
        height="200px"
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
      </div>
    </div>
  );
}

export default Product;
