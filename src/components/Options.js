import React from "react";
import Input from "./Input";

function Option({ options, no }) {
  let i = 1;
  return (
    <div className="form">
      <form action="">
        {options.map((option) => {
          return <Input key={i++} option={option} no={no} />;
        })}
        <input type="reset" className="btn btn-info" value="Reset" />
      </form>
    </div>
  );
}

export default Option;
