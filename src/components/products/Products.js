import React from "react";

import jsonProducts from "./jsonProducts";
import Product from "./Product";

function Products() {
  const products = jsonProducts.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="d-flex flex-column bd-highlight mb-3">{products}</div>;
}

export default Products;
