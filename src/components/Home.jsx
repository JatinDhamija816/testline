import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-700 p-6 text-center">
      <div className="bg-white bg-opacity-30 p-10 rounded-2xl shadow-lg max-w-md w-full border border-white/40">
        <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">
          🚀 QuizMaster
        </h1>

        <p className="mt-4 text-lg text-gray-800 font-medium">
          Welcome to <span className="font-semibold">QuizMaster</span>! Test
          your knowledge with fun and challenging multiple-choice questions.
          Compete, learn, and have fun!
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md 
            hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
};

export default Home;
