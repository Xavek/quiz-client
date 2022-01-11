import Header from "./components/Header";
import Questions from "./components/Questions";
import axios from "axios";
import { useEffect, useState } from "react";
// import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  // Storing the received Questions and answers in localstorage.
  // Or i can save the data locally and manipulate the dom. using useEffect hook
  // Saving the response data into the useState Hook.
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/questions").then((res) => {
      const localData = res.data.data;
      setUserData(localData);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />} />
        <Route path="/questions" element={<Questions userData={userData} />} />
      </Routes>
      {/* <Button /> */}
    </BrowserRouter>
  );
}

export default App;
