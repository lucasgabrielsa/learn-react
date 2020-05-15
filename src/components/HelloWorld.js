import React from "react";

function HelloWorld() {
  const firstName = "Lucas Gabriel";
  const lastName = "Simão Alves";
  const firstLanguage = "Java";
  const lastLanguage = "React";

  const date = new Date();
  //const date = new Date(2020, 5, 14, 20);
  const hours = date.getHours();
  let timeofDay;

  const styles = { backgroundColor: "lightgray" };

  if (hours < 12) {
    timeofDay = "morning";
    styles.color = "blue";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon";
    styles.color = "red";
  } else {
    timeofDay = "night";
    styles.color = "orange";
  }

  return (
    <div>
      <h4>Hello World, {firstName + " " + lastName}</h4>
      <h4>{`Learning ${firstLanguage} and ${lastLanguage}`}</h4>
      <h4 style={styles}>Good {timeofDay}</h4>
    </div>
  );
}

export default HelloWorld;
