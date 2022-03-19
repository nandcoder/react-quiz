import React from "react";
import Option from "./Options";

function Ques({ no, desc, WA, AC }) {
  const options = [...WA, AC];
  const jumb = options.sort();
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return (
    <div className="Ques">
      <div className="question">
        <span className="qeus-no">{no + "."} </span>
        <span className="desc">{decodeHtml(desc)} </span>
      </div>
      <Option options={jumb} currQues={desc} decoder={decodeHtml} />
    </div>
  );
}

export default Ques;
