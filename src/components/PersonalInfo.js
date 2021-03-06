import React from "react";
import VacationSpots from "./VacationSpots";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Todo from "./Todo";
import HelloWorld from "./HelloWorld";

const myDivStyle = {
  /*
  color: "#FFFFFF",
  backgroundColor: "#B00020",
  padding: "10px",
  fontFamily: "Arial",
  */
};

function PersonalInfo() {
  return (
    <div style={myDivStyle}>
      <Navbar />
      <h1 style={{ color: "gray" }}>Lucas Gabriel</h1>
      <h3>Full Stack Software Engineer</h3>
      <hr />

      <p>Favorite spots to visit on vacation:</p>
      <VacationSpots />
      <Footer />

      <hr />
      <Todo />

      <br />
      <HelloWorld />
    </div>
  );
}

export default PersonalInfo;
