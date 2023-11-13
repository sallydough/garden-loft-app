import React from "react";
import DateTime from "./DateTime";
import Weather from "./Weather";

const Greeting = () => {
  return (
    <div>
      <h1>Welcome Elizabeth!</h1>
      <DateTime />
      <Weather />
    </div>
  );
};

export default Greeting;
