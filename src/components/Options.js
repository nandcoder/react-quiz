import React from "react";
import Input from "./Input";

function Option({ options, currQues, decoder }) {
    return (
        <form action="" id={currQues}>
            <div className="ans">
                <div className="row">
                    {options.map((option) => {
                        return (
                            <Input key={option} name={currQues} option={option} decoder={decoder} />
                        );
                    })}
                </div>
                <input type="reset" className="btn btn-info reset" value="Reset" />
            </div>
        </form>
    );
}

export default Option;
