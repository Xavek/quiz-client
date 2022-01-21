import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import userDataValidate from "./UserDataValidator";

const Signup = () => {
  const refUsernameValue = useRef(null);
  const refPassValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = refUsernameValue.current.value;
    const password = refPassValue.current.value;
    refPassValue.current.value = "";
    refUsernameValue.current.value = "";
    console.log(`${username} and ${password}`);
    const errorValue = userDataValidate({ username, password });

    // I need to redirect the user to question page if everything goes right from backend
    // Place the global state of user and userData after page refresh that the user is legitt.
    // Checking whether there is error value or not then only sending the axios post request.
    if (errorValue) {
      alert(errorValue);
    } else {
      axios
        .post("http://localhost:4000/userflow/iqquiz/api/user/auth", {
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
    }
  };
  // In response user must get the JWT Tokens.
  // Tokens get updated at ContextAPI and then redirect to the question page.
  return (
    <div>
      <p className="mt-8 text-center px-2 py-2 text-lg font-medium font-mono ">
        First Time Sign Up To Play a Game. OR{" "}
        <Link to="/login">
          <button className="mx-1 my-1 px-2 py-1 bg-slate-400 text-lg font-mono  font-semibold rounded-lg">
            Login
          </button>
        </Link>
      </p>
      <div className="mt-20 grid place-items-center h-64 font-mono">
        <label htmlFor="username" className="text-2xl">
          User Name (4 to 8 char):
        </label>
        <input
          ref={refUsernameValue}
          type="text"
          id="username"
          name="username"
          required
          className="block bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl"
        ></input>
        <label htmlFor="password" className="text-2xl">
          Password
        </label>

        <input
          ref={refPassValue}
          type="password"
          id="password"
          name="password"
          required
          className="block  bg-white w-50 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl"
        ></input>
        <button
          onClick={handleSubmit}
          className="my-2 py-2 px-4  bg-slate-400 text-white-800 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg border-l-8 border-zinc-400 text-2xl"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
