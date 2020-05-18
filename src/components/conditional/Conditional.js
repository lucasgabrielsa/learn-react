import React from "react";

function Conditional(props) {
  //   const htmlRetorno = props.isLoading ? (
  //     <h1>Is loading ....</h1>
  //   ) : (
  //     <h1>Loaded</h1>
  //   );

  const htmlRetorno = <h1>{props.isLoading ? "Is Loading ..." : "Loaded"}</h1>;

  return htmlRetorno;
}

export default Conditional;
