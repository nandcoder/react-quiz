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
      {!submit && (
        <button onClick={submitting()} className="btn">
          SUBMIT
        </button>
      )}
    </div>
  );
}

export default Quiz;
