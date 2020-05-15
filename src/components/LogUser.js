import React from "react";

class LogUser extends React.Component {
  constructor() {
    super();
  }
  render() {
    let returnCompenent;
    if (this.props.isUserLogged) {
      returnCompenent = <div>You User is Logged in</div>;
    } else {
      returnCompenent = <div>You User is Not Logged in</div>;
    }

    console.log("returnComponent", returnCompenent);
    return returnCompenent;
  }
}

export default LogUser;
