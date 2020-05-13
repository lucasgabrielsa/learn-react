import React from "react";

const spots = ["Porto Seguro", "Netherlands", "Caldas Novas"];

function VacationSpots() {
  return (
    <div>
      <ul>
        {spots.map((spot, index) => {
          return <li key={index}>{spot}</li>;
        })}
      </ul>
    </div>
  );
}

export default VacationSpots;
