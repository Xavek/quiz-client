import React, { useState } from "react";

// contains all the questions and answer options.
const Questions = (props) => {
  // const [nextQuestion, setNextQuestion] = useState(0);
  const [cnt, setCnt] = useState(0);
  const setAnswer = (value) => {
    localStorage.setItem(`${props.userData[cnt].id}`, `${value}`);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const userAnswer = e.target.innerText;
    setAnswer(userAnswer);
    // if (nextQuestion < props.userData.length) {
    //   setNextQuestion((prevState) => prevState + 1);
    // }
    if (cnt < props.userData.length) {
      setCnt(cnt + 1);
    } else {
      // After the question ends then you have to show the scores.
    }
  };
  return (
    <main className="grid place-items-center h-screen bg-zinc-300">
      {/* Questions Skeleton */}
      <div>
        <p className="mb-16 font-mono font-semibold text-2xl">
          {props.userData[cnt].question}
        </p>
        <div>
          {props.userData[cnt].answers.map((answer, i) => {
            return (
              <button
                key={i}
                onClick={handleClick}
                className="my-4 flex flex-col py-2 px-2 rounded-lg bg-stone-200   active:bg-violet-600    focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-semibold text-lg font-mono "
              >
                {answer.answerText}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Questions;
