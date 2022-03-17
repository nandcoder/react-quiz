import React from "react";

function Input({ option, no }) {
  return (
    <div className="options">
      <input type="radio" id={option} value={option} name={no} />
      <label for={option}>{option}</label>
      <br />
    </div>
  );
}

export default Input;
