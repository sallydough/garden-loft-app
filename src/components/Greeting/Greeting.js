import React from "react";
import './greeting.css'
import DateTime from "./DateTime";
import Weather from "./Weather";

const Greeting = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome Elizabeth!</h1>
      <DateTime />
      <Weather />
    </div>
  );
};

export default Greeting;
