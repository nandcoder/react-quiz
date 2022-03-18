import React from "react";
import Option from "./Options";

function Ques(props) {
  const options = [...props.WA, props.AC];
  const jumb = options.sort();
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return (
    <div className="Ques">
      <div className="question">
        <span className="qeus-no">{props.no + "."} </span>
        <span className="desc">{decodeHtml(props.desc)} </span>
      </div>
      <Option options={jumb} no={props.no} />
    </div>
  );
}

export default Ques;
