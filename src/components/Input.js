import React from "react";

function Input({ option, no }) {
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return (
    <div className="col-lg-6 col-md-12">
      <div className="options">
        <input
          type="radio"
          id={option}
          value={option}
          className="radio"
          name={no}
        />
        <label for={option}>{decodeHtml(option)}</label>
        <br />
      </div>
    </div>
  );
}

export default Input;
