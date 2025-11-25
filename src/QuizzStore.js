import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { fetchQuestion } from "./ApiServices/services";

export const initialState = {
  questions: [],
  currentIndex: 0,
  answer: [],
  currentIndex: false,
  error: null,
  timer: 10,
};

export const QuizzStore = create(
  persist(
    immer((set, get) => ({
      ...initialState,
      resetQuizz: () => {
        set((state) => Object.assign(state, initialState));
      },
      startQuizz: async () => {
        set((state) => {
          state.answer = [];
          state.currentIndex = 0;
          state.timer = 10;
          state.error = null;
        });
        try {
          const data = await fetchQuestion();
          
          const questions = data.map((item) => {
            return {
              id: item.id,
              question: item.question.text,
              options: [...item.incorrectAnswers, item.correctAnswer].sort(
                () => Math.random() - 0.5
              ),

              correctAnswer: item.correctAnswer,
            };
          });

          set((state)=> {
            state.questions = questions;
            state.currentIndex = 0;
          })
          console.log(questions)
        } catch (error) {
          console.error('error fetching questions', error)
          set((state)=> {
            state.error = 'failed to load questions, please try again'
          })
        }
      },

      chooseAnswer: (chosen) => {
        set((state) => {
          const {questions, currentIndex, answers} = state
          const updatedQuestions = questions.map((question, index) => index === currentIndex ?{...question, selectedAnswer: chosen}: question)

          const updatedAnswer = [...answers, {questionId: questions[currentIndex].id, answer: chosen,},]

          const nextIndex = currentIndex +1

          return {
            questions: updatedQuestions,
            answers: updatedAnswer,
            currentIndex: nextIndex < questions.length ? nextIndex : currentIndex + 1,
            timer: initialState.timer
          }
        })
           console.log(get().answers)
      }
    })),
    {
      name: 'Quizz-storage',
      storage: createJSONStorage(()=> localStorage),
    }
  )
);

export const useQuesStore = () => QuizzStore();
