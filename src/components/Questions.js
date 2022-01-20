import React, { useState } from "react";

// contains all the questions and answer options.
const Questions = (props) => {
  const [showScore, setShowScore] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (correctVal) => {
    if (correctVal) {
      setScore(score + 1);
    }
    const nextQ = cnt + 1;
    if (nextQ < props.userData.length) {
      setCnt(nextQ);
    } else {
      // After the question ends then you have to show the scores.
      setShowScore(true);
    }
  };

  return (
    <main className="grid place-items-center h-screen bg-zinc-300 font-mono">
      {/* Questions Skeleton */}
      {showScore ? (
        <div>
          <p className="text-2xl font-semibold font-mono text-white-800">
            You Scored {score}/{props.userData.length}
          </p>
          <button className="my-2 py-2 px-4  bg-neutral-400 text-white-800 font-semibold text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg border-l-8 border-zinc-400">
            See Leader Board
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-16  text-2xl font-medium">
            {props.userData[cnt].question}
          </p>
          <div>
            {props.userData[cnt].answers.map((answer, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handleClick(answer.isCorrect);
                  }}
                  className="my-4 flex flex-col py-2 px-2 rounded-lg bg-stone-200   active:bg-violet-600    focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-light text-lg font-mono "
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
};

export default Questions;
