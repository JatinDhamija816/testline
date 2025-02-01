import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("/api/quiz");
        setQuestions(res.data.questions);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuestions();
  }, []);

  const saveAnswer = (questionId, selectedOption) => {
    setUserAnswers((prev) => [...prev, { questionId, selectedOption }]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        userAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        saveAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
