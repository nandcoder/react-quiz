import React from "react";
import Input from "./Input";

function Option({ options, no }) {
  let i = 1;
  return (
    <form action="">
      <div className="container ans">
        <div className="row">
          {options.map((option) => {
            return <Input key={i++} option={option} no={no} />;
          })}
        </div>
        <input type="reset" className="btn btn-info reset" value="Reset" />
      </div>
    </form>
  );
}

export default Option;
