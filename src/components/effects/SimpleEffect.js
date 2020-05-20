import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function SimpleEffect(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  /* empty array just when first time loadind the component */
  useEffect(() => {
    setColor(randomcolor());
  }, []);

  /* when count change */
  /*
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);*/

  return (
    <div>
      <h1 style={{ color: color }}>Counter: {count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

export default SimpleEffect;
