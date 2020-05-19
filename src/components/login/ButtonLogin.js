import React from "react";

function ButtonLogin(props) {
  //let butttonToRender;
  // if (!props.isLogged) {
  //   butttonToRender = (
  //     <button
  //       type="button"
  //       className="btn btn-primary"
  //       onClick={() => props.loginHandle()}
  //     >
  //       Log in
  //     </button>
  //   );
  // } else {
  //   butttonToRender = (
  //     <button
  //       type="button"
  //       className="btn btn-secondary"
  //       onClick={() => props.loginHandle()}
  //     >
  //       Loggout
  //     </button>
  //   );
  // }

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
