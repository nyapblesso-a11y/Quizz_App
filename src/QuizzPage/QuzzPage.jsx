import React, { useEffect } from "react";
import "./QuizzPage.css";
import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../QuizzStore";

export const QuzzPage = () => {
  const navigate = useNavigate();
  const { questions, currentIndex, chooseAnswer } = useQuesStore();

  let currentQuestion = questions[currentIndex];
  console.log(currentQuestion);

  
  console.log("nnnnnwwe", questions, currentIndex);

  return (
    <>
      <div className="bg-transparent  p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-violet mb-6">
          Questions for you!
        </h1>
        <h6 className="text-lg text-gray-900 mb-2">Have Fun</h6>
        <h1 className="text-white font-bold text-3xl">
          {currentIndex + 1}. {currentIndex < questions.length ? currentQuestion.question : navigate('/quizz/results')}
        </h1>

        <div className="flex flex-col gap-2 mt-4 ">
          {currentQuestion.options.map((option, id) => {
            return (
              <button
                key={id}
                onClick={() => chooseAnswer(option)}
                className="p-4 border text-white border-gray-300 rounded-lg text-left hover:bg-[#808080]  transition duration-150 cursor-pointer"
              >
                {option}{" "}
              </button>
            );
          })}
        </div>

        {/* <button
          className="bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => navigate("results")}
        >
          <span>check scores</span>
        </button>  */}
      </div>
    </>
  );
};
