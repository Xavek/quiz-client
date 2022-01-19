import Header from "./components/Header";
import Questions from "./components/Questions";
import axios from "axios";
import { useEffect, useState } from "react";
// import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  // Storing the received Questions and answers in localstorage.
  // Or i can save the data locally and manipulate the dom. using useEffect hook
  // Saving the response data into the useState Hook.
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/questions").then((res) => {
  //     const localData = res.data.data;
  //     console.log("I am localdata", localData);
  //     setUserData(localData);
  //     console.log("I am home UserData", userData);
  //   }, []);
  // });
  const userData = [
    {
      id: 1,
      question: "Where is Kathmandu Located ?",
      answers: [
        { answerText: "India", isCorrect: false },
        { answerText: "Nepal", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Pakistan", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Which colour is SKY ?",
      answers: [
        { answerText: "Blue", isCorrect: true },
        { answerText: "Pink", isCorrect: false },
        { answerText: "Cyan", isCorrect: false },
        { answerText: "Greenish", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Height of Mt.Everest ?",
      answers: [
        { answerText: "8848m", isCorrect: true },
        { answerText: "8848Km", isCorrect: false },
        { answerText: "8884m", isCorrect: false },
        { answerText: "8884Km", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Who am I, Acc to Sociology ?",
      answers: [
        { answerText: "Animal", isCorrect: false },
        { answerText: "Party Animal", isCorrect: false },
        { answerText: "Mundane Animal", isCorrect: false },
        { answerText: "Social Animal", isCorrect: false },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/questions"
            element={<Questions userData={userData} />}
          />
        </Route>
      </Routes>
      {/* <Button /> */}
    </BrowserRouter>
  );
}

export default App;
