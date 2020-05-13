import React from "react";

const spots = ["Porto Seguro", "Netherlands", "Caldas Novas"];

const myDivStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
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
      <ul>
        {spots.map((spot) => {
          return <li>{spot}</li>;
        })}
      </ul>
    </div>
  );
}

export default PersonalInfo;
