import LeaderBoard from "./components/LeaderBoard";
import Questions from "./components/Questions";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
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
        { answerText: "Social Animal", isCorrect: true },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/questions"
            element={<Questions userData={userData} />}
          />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
