import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";

const HopePage = () => {
  const navigate = useNavigate()
  return (
    <>
     <div className="bg-transparent  p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold text-violet mb-6">
            Welcome to the Quiz!
          </h1>
          <p className="text-lg text-gray-900 mb-8">
            Test your knowledge and have fun.
          </p>
          <button className="bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105" onClick={()=> navigate('/quizz')}>
            Start Quiz
          </button>
        </div>
    </>
  );
};

export default HopePage;
