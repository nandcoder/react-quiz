import React, { useState } from "react";
import Ques from "./Ques";
import Results from "./Results";

function Quiz({ ques }) {
  const [btnText, setBtnText] = useState("Submit");
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(false);
  let AC = [];
  let allQues = [];
  function handleClick(e) {
    e.preventDefault();
    pref();
    if (allAnswered()) {
      submitting();
    } else if (btnText === "Submit") {
      setBtnText("Confirm");
    } else {
      submitting();
      setBtnText("Submit");
    }
  }
  function pref() {
    const correctAC = ques.map((questionS) => {
      return questionS.correct_answer;
    });
    const allQs = ques.map((questionS) => {
      return questionS.question;
    });
    AC = [...correctAC];
    allQues = [...allQs];
    console.log(AC);
    console.log(allQues);
  }
  function allAnswered() {
    let ans = true;
    allQues.forEach((question) => {
      let answered = false;
      const names = document.getElementsByName(question);
      console.log("all names here", names);
      names.forEach((name) => {
        if (name.checked) {
          answered = true;
        }
      });
      if (!answered) {
        ans = false;
        return false;
      }
    });
    return ans;
  }
  function submitting() {
    setSubmit(true);
    console.log("submitted successfully)))))");
    showResult();
  }
  function showResult() {
    let count = 0;
    allQues.forEach((question) => {
      const names = document.getElementsByName(question);
      names.forEach((name) => {
        name.disabled = true;
        if (name.checked) {
          name.parentElement.style.backgroundColor = "red";
        }
      });
    });
    AC.forEach((correct) => {
      const correctAnswer = document.getElementById(correct);
      correctAnswer.parentElement.style.backgroundColor = "green";
      if (correctAnswer.checked) {
        count++;
        correctAnswer.parentElement.style.backgroundColor = "lime ";
      }
    });
    console.log(count);
    setScore(count);
    return 0;
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
        {btnText !== "Submit" && (
          <p className="results">
            ALERT!!! You have unattempted questions. Press 'Confirm' to submit.
          </p>
        )}
        {!submit ? (
          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-info"
            id="submit"
          >
            {btnText}
          </button>
        ) : (
          <Results score={score} />
        )}
      </div>
    </div>
  );
}

export default Quiz;
