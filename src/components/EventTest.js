import React from "react";

class EventTest extends React.Component {
  constructor() {
    super();
  }

  myClickFunction = () => {
    console.log(new Date());
  };

  myHoverFunction(e) {
    console.log("e", e);
  }

  render() {
    return (
      <div>
        <img
          src="https://www.placecage.com/c/200/300"
          onMouseOver={this.myHoverFunction}
        />
        <br />
        <br />
        <button
          type="button"
          class="btn btn-primary"
          onClick={this.myClickFunction}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default EventTest;
