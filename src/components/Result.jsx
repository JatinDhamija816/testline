import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { questions, userAnswers } = useContext(QuizContext);

  const correctAnswersCount = userAnswers.filter(
    (ans) => ans.selectedOption.is_correct
  ).length;

  const incorrectAnswersCount = userAnswers.filter(
    (ans) => !ans.selectedOption.is_correct
  ).length;

  const totalScore = correctAnswersCount * 4 - incorrectAnswersCount * 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-green-600">Quiz Completed!</h2>

        <p className="mt-4 text-lg font-semibold">
          Your Score: {totalScore} / {questions.length * 4}
        </p>

        <p className="mt-2 text-md font-medium text-gray-700">
          ✅ {correctAnswersCount} correct vs {incorrectAnswersCount} incorrect
          (out of {questions.length})
        </p>

        <div className="mt-6 w-full text-left">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index]?.selectedOption;
            const correctAnswer = question.options.find(
              (opt) => opt.is_correct
            );

            return (
              <div
                key={index}
                className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300"
              >
                <p className="font-semibold text-lg text-gray-800">
                  {index + 1}. {question.question}
                </p>

                <p
                  className={`mt-3 p-3 rounded-md font-medium ${
                    userAnswer?.is_correct
                      ? "bg-green-100 text-green-700 border border-green-500"
                      : "bg-red-100 text-red-700 border border-red-500"
                  }`}
                >
                  ✅ Your Answer: {userAnswer?.description || "Not answered"}
                </p>

                <p className="mt-3 p-3 bg-blue-100 text-blue-800 border border-blue-500 rounded-md font-medium">
                  🎯 Correct Answer: {correctAnswer?.description}
                </p>

                <div className="mt-4 p-4 bg-white border-l-4 border-blue-500 shadow-sm rounded-md">
                  <h3 className="text-md font-semibold text-gray-700">
                    📘 Explanation:
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {question?.detailed_solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
