import React, { useState } from "react";
import Option from "./Options";

function Ques(props) {
  const options = [...props.WA, props.AC];
  const jumb = options.sort();
  return (
    <div className="Ques">
      <span className="qeus-no">{props.no} </span>
      <span className="desc">{props.desc} </span>
      <Option options={jumb} no={props.no} />
    </div>
  );
}

export default Ques;
