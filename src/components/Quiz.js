import React, { useEffect, useState } from "react";
import Ques from "./Ques";

function Quiz({ ques }) {
  const [submit, setSubmit] = useState(false);
  function submitting() {
    setSubmit(true);
    console.log("clicked");
  }
  let i = 1;
  return (
    <div className="Quiz">
      <div className="wrapQS">
        <div className="QS">
          {ques.map((questionS) => {
            return (
              <Ques
                key={i++}
                no={i}
                desc={questionS.question}
                WA={questionS.incorrect_answers}
                AC={questionS.correct_answer}
              />
            );
          })}
        </div>
        {!submit && (
          <button onClick={submitting} className="btn btn-info" id="submit">
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
