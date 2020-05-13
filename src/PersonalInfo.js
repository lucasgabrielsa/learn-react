import React from "react";
import VacationSpots from "./VacationSpots";

const myDivStyle = {
  color: "#FFFFFF",
  backgroundColor: "#B00020",
  padding: "10px",
  fontFamily: "Arial",
};

function PersonalInfo() {
  return (
    <div style={myDivStyle}>
      <h1 style={{ color: "gray" }}>Lucas Gabriel</h1>
      <h3>Full Stack Software Engineer</h3>
      <hr />

      <p>Favorite spots to visit on vacation:</p>
      <VacationSpots />
    </div>
  );
}

export default PersonalInfo;
