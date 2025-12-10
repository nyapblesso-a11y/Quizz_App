import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { fetchQuestion } from "../Services/services";

export const initialState = {
  questions: [],
  currentIndex: 0,
  answers: [],
  error: null,
  timer: 30,
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
          state.answers = [];
          state.currentIndex = 0;
          state.timer = 30;
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

          set((state) => {
            state.questions = questions;
            state.currentIndex = 0;
          });
        } catch (error) {
          console.error("error fetching questions", error);
          set((state) => {
            state.error = "failed to load questions, please try again";
          });
        }
        // console.log(questions);
      },

      chooseAnswer: (selected) => {
        set((state) => {
          const { questions, currentIndex, answers } = state;
          const updatedAnswers = [
            ...answers,
            { questionId: questions[currentIndex].id, answers: selected },
          ];

          const nextIndex = currentIndex + 1;
          return {
            answers: updatedAnswers,
            currentIndex: nextIndex,
            timer: initialState.timer,
          };
        });
      },

      countDown: () => {
        const { timer } = get();
        if (timer <= 0) {
          get().chooseAnswer(null);
        } else {
          set((s) => {
            s.timer = timer - 1;
          });
        }
      },
    })),
    {
      name: "Quizz-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useQuesStore = () => QuizzStore();
