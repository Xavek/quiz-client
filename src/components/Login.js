import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const refUsernameValue = useRef(null);
  const refPassValue = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = refUsernameValue.current.value;
    const password = refPassValue.current.value;
    refPassValue.current.value = "";
    refUsernameValue.current.value = "";
    console.log(`${username} and ${password}`);
    axios
      .post("http://localhost:5000/iqquiz/api/user/auth", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("tokens", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <label htmlFor="username">Name (4 to 8 characters):</label>
          <input
            ref={refUsernameValue}
            type="text"
            id="username"
            name="username"
            required
            className="block bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></input>
          <label htmlFor="password">Password</label>

          <input
            ref={refPassValue}
            type="password"
            id="password"
            name="password"
            required
            className="block  bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></input>
          <button
            onClick={handleSubmit}
            className="my-2 py-2 px-4  bg-slate-400 text-white-800 font-semibold text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg border-l-8 border-zinc-400"
          >
            Submit
          </button>
        </div>
      </>
    </>
  );
};

export default Login;
