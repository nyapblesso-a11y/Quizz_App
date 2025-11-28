import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../Store/quizzStore";
import { current } from "immer";

const ResutsPage = () => {
  const navigate = useNavigate();
  const { questions, answers, startQuizz } = useQuesStore();
  const handlePlayBack = async () => {
    await startQuizz();
    navigate("/quizz");
  };

  const selectedAnswers = answers.map((item) => item.answers);
  const correctAnswers = questions.map((question) => question.correctAnswer);
  console.log("all correct ansers", correctAnswers);
  const isCorrect = selectedAnswers.map(
    (ans, index) => ans === correctAnswers[index]
  );

  console.log(isCorrect);
  let score = 0;
  for (let i = 0; i < isCorrect.length; i++) {
    if (isCorrect[i]) {
      score += 1;
    }
  }

  console.log("Questions", questions);
  return (
    <>
      <div className="bg-transparent  p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-violet mb-6 text-amber-100">
          Here are your score for this questioning session
        </h1>
        <p className="text-lg text-amber-100 mb-8 font-bold">
          {score} out of {questions.length}
        </p>

        <>
          {" "}
          <div className="text-left space-y-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const correctAnswer = question.correctAnswer;
              const userWasCorrect = isCorrect[index];
              return (
                <div key={index} className="p-2 border rounded-lg">
                  <h2 className="font-semibold text-xl text-amber-50">
                    {index + 1}. {question.question}
                  </h2>
                  {userWasCorrect ? (
                    <p className="text-green-600 font-bold">
                      Correct Answer: {correctAnswer}
                    </p>
                  ) : (
                    <div>
                      <p className="text-red-600 font-bold">
                        Your Answer: {userAnswer}
                      </p>
                      <p className="text-green-600 font-bold">
                        Correct Answer: {correctAnswer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>

        <div className="">
          <button
            className="bg-transparent p-8 hover:bg-[#232024] text-amber-100 font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="bg-transparent p-8 hover:bg-[#232024] text-amber-100 font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handlePlayBack}
          >
            Play Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ResutsPage;
