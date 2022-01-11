import React from "react";
// This is the header cum Navigation of the page.

const Header = () => {
  return (
    <>
      <nav className="flex justify-evenly my-4">
        <p className="font-semibold font-sans text-xl hover:text-2xl hover:cursor-pointer ">
          IQ QUIZ
        </p>
        <p className=" font-semibold font-sans text-xl hover:text-2xl hover:cursor-pointer">
          Leaderboard
        </p>
        <p className=" font-semibold font-sans text-xl hover:text-2xl hover:cursor-pointer">
          My Profile
        </p>
      </nav>
    </>
  );
};

export default Header;
