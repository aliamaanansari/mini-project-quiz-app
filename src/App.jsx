import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rules from "./pages/Rules";
import Result from "./pages/Result";
import Quizzes from "./pages/Quizzes";
import Questions from "./pages/Questions";
import Signup from "./pages/Signup";
import { QuizContext } from "./store/context";
import { initialState, reducer } from "./store/reducer";
import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:quizId" element={<Questions />} />
          <Route path="/quiz/:quizId/result/" element={<Result />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}
export default App;
