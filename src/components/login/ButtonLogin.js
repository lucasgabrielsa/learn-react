import React from "react";

function ButtonLogin(props) {
  const butttonToRender = (
    <button
      type="button"
      className={`btn btn-${props.isLogged ? "secondary" : "primary"}`}
      onClick={() => props.loginHandle()}
    >
      {props.isLogged ? "Loggout" : "Log in"}
    </button>
  );

  return <div>{butttonToRender}</div>;
}

export default ButtonLogin;
