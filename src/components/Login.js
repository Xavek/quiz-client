import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <>
        <p className="mt-8 text-center px-2 py-2 text-lg font-semibold font-sans ">
          Please Login To Play A Game. Or Sign Up First. {""}
          <Link to="/signup">
            <button className="mx-2 my-x px-2 py-2 bg-slate-400 text-lg font-mono  font-semibold rounded-lg">
              Sign Up
            </button>
          </Link>
        </p>
        <div className="mt-20 grid place-items-center h-64">
          <label for="username">Name (4 to 8 characters):</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            minlength="4"
            maxlength="10"
            className="block bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></input>
          <label for="password">Password</label>

          <input
            type="text"
            id="password"
            name="password"
            required
            minlength="4"
            maxlength="8"
            className="block  bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></input>
          <button className="my-2 py-2 px-4  bg-slate-400 text-white-800 font-semibold text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg border-l-8 border-zinc-400">
            Submit
          </button>
        </div>
      </>
    </>
  );
};

export default Login;
