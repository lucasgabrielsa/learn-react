import React, { useState } from "react";

function SimpleHook() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("lucas");
  const [age] = useState(34);
  const [details, setDetails] = useState({
    email: "lucasgabrielsa@hotmail.com",
  });

  function testChangeState() {
    setDetails((prevDetails) => {
      return { ...prevDetails, email: prevDetails.email + "*" };
    });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        The name is {nome}, {age} years old
      </p>
      <p>{details.email}</p>
      <button onClick={() => setNome("Gabriel")}>Set name for Gabriel</button>
      <button onClick={() => testChangeState()}>Test Change State</button>
    </div>
  );
}

export default SimpleHook;
