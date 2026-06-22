import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../Store/quizzStore";
import { useEffect } from "react";

export const QuzzPage = () => {
  const navigate = useNavigate();
  const { questions, currentIndex, chooseAnswer, countDown, timer } =
    useQuesStore();
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentIndex >= questions.length && questions.length > 0) {
      navigate("/quizz/results");
    }
  }, [currentIndex, questions.length, navigate]);

  useEffect(() => {
    const counter = setInterval(() => {
      countDown();
    }, 1000);
    return () => clearInterval(counter);
  }, [countDown]);

  return (
    <>
      <div className="bg-transparent p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-amber-100 mb-4">
          Questions for you!
        </h1>

        {timer < 10 ? (
          <p className="text-2xl text-green-600 p-2">
            <span className="text-red-600 animate-pulse font-semibold">{timer}s </span>/30s
          </p>
        ) : (
          <p className="text-2xl text-green-600 p-2">
            <span className="text-green-600 font-semibold">{timer}s </span>/30s
          </p>
        )}

        <h1 className="text-white font-bold text-3xl">
          {currentIndex + 1}. {currentQuestion && currentQuestion.question}
        </h1>

        <div className="flex flex-col gap-2 mt-4">
          {currentQuestion && currentQuestion.options.map((option, id) => (
            <button
              key={id}
              onClick={() => chooseAnswer(option)}
              className="p-4 border text-white border-gray-300 rounded-lg text-left hover:bg-[#808080] transition duration-150 cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};