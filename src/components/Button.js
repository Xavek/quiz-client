import axios from "axios";
import React from "react";

const Button = () => {
  const sendRequest = (ansArray) => {
    axios
      .post("http://localhost:5000/api/questions/answer", { ansArray })
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userAnsArray = {};
    for (let i = 1; i < 5; i++) {
      userAnsArray[`${i}`] = localStorage.getItem(`${i}`);
    }
    localStorage.clear();
    sendRequest(userAnsArray);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-300">
      <button
        onClick={handleSubmit}
        className="my-2 py-2 px-4  bg-neutral-400 text-white-800 font-semibold text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg border-l-8 border-zinc-400"
      >
        Submit
      </button>
    </div>
  );
};

export default Button;
