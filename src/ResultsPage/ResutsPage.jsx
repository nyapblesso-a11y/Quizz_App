import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../QuizzStore";
import { current } from "immer";

const ResutsPage = () => {
  const navigate = useNavigate();
  const { questions, answers } = useQuesStore();

  const selectedAnswer = answers.map((answer) => {
    return answer.answers;
  });
  console.log("Selected", selectedAnswer);

  const currectAnswer = questions.map((question) => {
    return question.correctAnswer;
  });
  console.log("Correct", currectAnswer);

  const isCorrect = selectedAnswer.map(
    (_, index) => selectedAnswer[index] === currectAnswer[index]
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
        <h1 className="text-4xl font-bold text-violet mb-6">
          Here are your score for this questioning session
        </h1>
        <p className="text-lg text-white-900 mb-8">
          {score} of {questions.length}
        </p>
        {
          <>
            {questions.map((question, id) => {
              return (
                <div key={id}>
                  <h1>
                    {id + 1}. {question.question}
                  </h1>
                  {isCorrect ? (
                    <p>
                      {selectedAnswer[id] === question.correctAnswer
                        ? selectedAnswer[id]
                        : ""}
                    </p>
                  ) : (
                    <>
                      <p>{selectedAnswer[id]}</p>
                      <p>{question.correctAnswer}</p>
                    </>
                  )}
                </div>
              );
            })}
          </>
        }
        <div className="">
          <button
            className="bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default ResutsPage;
