import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const QuizApp = () => {
  const navigate = useNavigate();

  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    saveAnswer,
  } = useContext(QuizContext);

  const question = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    saveAnswer(question.id, option);
    if (currentQuestionIndex === 9) {
      navigate("/result");
    } else {
      setTimeout(() => setCurrentQuestionIndex((prev) => prev + 1), 800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-6">
      <div className="bg-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-lg text-center border border-white/30">
        <div>
          <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            {questions[currentQuestionIndex]?.topic}
          </h2>

          <h2 className="text-xl font-semibold text-gray-100">
            {currentQuestionIndex + 1} {". "}
            {questions[currentQuestionIndex]?.description}
          </h2>

          <div className="mt-6 space-y-4">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="block w-full py-3 px-5 rounded-lg transition-all 
                  bg-gradient-to-r from-purple-500 to-indigo-500 text-white 
                  hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-indigo-600"
              >
                {option.description}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
