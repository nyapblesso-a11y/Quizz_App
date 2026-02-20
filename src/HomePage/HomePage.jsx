import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../Store/quizzStore";

const HopePage = () => {
  const navigate = useNavigate();
  const { startQuizz } = useQuesStore();

  const handleStart = async () => {
    await startQuizz();
    navigate("/quizz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1b2e] via-[#232024] to-[#14121c] px-6">
      
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 text-center transition-all duration-300 hover:shadow-purple-500/20">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide">
          Welcome to the Quiz 
        </h1>

        <div className="w-24 h-1 bg-purple-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          You will answer <span className="text-purple-400 font-semibold">10 random questions</span> 
          with only <span className="text-purple-400 font-semibold">10 seconds</span> per question.
          <br /><br />
          If you fail to answer in time, the quiz automatically moves to the next question — 
          and you earn <span className="text-red-400 font-semibold">no points</span>.
          <br /><br />
          Stay focused. Think fast. Have fun 
        </p>

        
        <button
          onClick={handleStart}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg py-4 px-10 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Start Quiz
        </button>

      </div>
    </div>
  );
};

export default HopePage;