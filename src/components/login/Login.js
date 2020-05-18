import React from "react";
import ButtonLogin from "./ButtonLogin";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>You are {this.state.isLogged ? "Logged" : "Not Logged in"}</h1>
        <ButtonLogin
          isLogged={this.state.isLogged}
          loginHandle={this.loginUser}
        />
      </div>
    );
  }
}

export default Login;
