import React from "react";
import Question2 from "./Question2";

// contains all the questions and answer options.
const Questions = (props) => {
  console.log(props.userData);
  return props.userData.map((question) => {
    return <Question2 question={question} key={question.id} />;
  });
};

export default Questions;
