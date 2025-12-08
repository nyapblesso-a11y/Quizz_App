import { Navigate, useNavigate } from "react-router-dom";
import { useQuesStore } from "../Store/quizzStore";

const HopePage = () => {
  const navigate = useNavigate();
  const { startQuizz } = useQuesStore();
  const handleStart = async () => {
    await startQuizz();
    navigate("/quizz");
  };
  return (
    <>
      <div className="bg-transparent  p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-amber-100 mb-6">
          Welcome to the Quiz!
        </h1>
        
        <h6 className="text-2xl text-gray-900 mb-2 font-bold ">
          Game Rules: You've got 10 random questions to answer in 10 seconds.
          Failure to answer any question will automatically take you to the next
          question and then you'll score no point to the unanswered question.
          Test your knowledge and have fun.
        </h6>
        <button
          className="bg-transparent p-8 hover:bg-[#232024] text-amber-100 font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleStart}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default HopePage;
