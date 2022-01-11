import React from "react";

const Question2 = (props) => {
  const setAnswer = (value) => {
    localStorage.setItem(`${props.question.id}`, `${value}`);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const userAnswer = e.target.innerText;
    setAnswer(userAnswer);
  };

  return (
    <main className="grid place-items-center h-screen bg-zinc-300">
      {/* Questions Skeleton */}
      <div>
        <p className="mb-16 font-mono font-semibold text-2xl">
          {props.question.question}
        </p>
        <div>
          <button
            onClick={handleClick}
            className="my-4  py-2 px-2 rounded-lg bg-stone-200   active:bg-violet-600    focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-semibold text-lg font-mono "
          >
            {props.question.answer1}
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="my-4  py-2 px-2 rounded-lg bg-stone-200   active:bg-gray-600   focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-semibold text-lg font-mono "
          >
            {props.question.answer2}
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="my-4  py-2 px-2 rounded-lg bg-stone-200  active:bg-slate-600    focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-semibold text-lg font-mono"
          >
            {props.question.answer3}
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="my-4  py-2 px-2 rounded-lg bg-stone-200   active:bg-purple-300  focus:outline-none focus:ring focus:ring-blue-800 border-violet-200 font-semibold text-lg font-mono"
          >
            {props.question.answer4}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Question2;
