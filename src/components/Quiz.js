import React, { useState } from 'react'
import swal from 'sweetalert';
import Ques from './Ques';

function Quiz({ ques, setQues, reloader, setReloader }) {
    const [btnText, setBtnText] = useState('Submit');
    const [submit, setSubmit] = useState(false);
    let AC = [];
    let allQues = [];
    function handleClick(e) {
        e.preventDefault();
        pref();
        if (allAnswered()) {
            submitting();
        }
        else if (btnText === 'Submit') {
            setBtnText('Confirm');
            swal("ALERT!!!", "You have unattempted questions. 'Confirm' to submit!");
        }
        else {
            submitting();
            setBtnText('Submit');
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
        allQues.forEach(question => {
            let answered = false;
            const names = document.getElementsByName(question);
            console.log("all names here", names);
            names.forEach(name => {
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
        allQues.forEach(question => {
            const names = document.getElementsByName(question);
            names.forEach(name => {
                name.disabled = true;
                if (name.checked) {
                    name.parentElement.style.backgroundColor = 'red';
                }
            });
        });
        AC.forEach(correct => {
            const correctAnswer = document.getElementById(correct);
            correctAnswer.parentElement.style.backgroundColor = 'green';
            if (correctAnswer.checked) {
                count++;
                correctAnswer.parentElement.style.backgroundColor = 'lime ';
            }
        });
        console.log(count);
        swal(`Your score is ${count} out of 10`);
        return 0;
    }
    function tryAgain() {
        setReloader(!reloader);
        setQues([]);
        setBtnText('Submit');
        setSubmit(false);
    }
    let i = 1;
    return (
        <div className='Quiz'>
            <div className="wrapQS">
                <div className="QS">
                    {ques.map((questionS) => {
                        return <Ques key={i++} no={i} desc={questionS.question} WA={questionS.incorrect_answers} AC={questionS.correct_answer} />
                    })}
                </div>
                {!submit ? <button onClick={handleClick} type="submit" className='btn btn-info' id='submit'>{btnText}</button> : <button onClick={tryAgain} className='btn btn-primary' id='submit'>Try Again</button>}
            </div>
        </div>
    )
}

export default Quiz;