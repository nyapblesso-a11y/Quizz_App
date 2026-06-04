import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuesStore } from "../Store/quizzStore";

const HomePage = () => {
  const navigate = useNavigate();
  const { startQuizz } = useQuesStore();

  const handleStart = async () => {
    await startQuizz();
    navigate("/quizz");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#3a313a] p-4 sm:p-6 font-sans antialiased text-white">
    
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center shadow-md">
            <span className="text-[#3a313a] font-bold text-lg tracking-tighter">Q</span>
          </div>
          <span className="font-semibold text-sm tracking-wider uppercase opacity-90">
            Quiz<span className="text-zinc-400 font-light">Studio</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          System Ready
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center my-8">
        <div className="max-w-xl w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xl backdrop-blur-sm text-center">
                    
          <span className="inline-block bg-white/10 text-zinc-300 text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-md mb-6">
            Assessment Engine
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white mb-3">
            Welcome to the Quiz
          </h1>
          
          <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto mb-10 leading-relaxed">
            Please review the evaluation parameters below before initiating the session.
          </p>

          <div className="space-y-3 max-w-xs sm:max-w-sm w-full mx-auto text-left mb-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5 text-xs sm:text-sm">
              <span className="text-zinc-400">Total Volume</span>
              <span className="font-medium text-zinc-200">10 Questions</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5 text-xs sm:text-sm">
              <span className="text-zinc-400">Time Allocation</span>
              <span className="font-medium text-zinc-200">10s / question</span>
            </div>
            
            <div className="flex items-center justify-between pb-2.5 text-xs sm:text-sm">
              <span className="text-zinc-400">Enforcement</span>
              <span className="font-medium text-zinc-200 text-right">Auto-skip on expiration</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-[#3a313a] font-medium text-sm sm:text-base py-3.5 px-10 rounded-lg transition-all duration-200 shadow-md active:scale-[0.99]"
          >
            Begin Assessment
          </button>

        </div>
      </main>

      <footer className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 py-4 border-t border-white/5 text-[11px] text-zinc-500 tracking-wide">
        <p>© 2026 QuizStudio Platform. All rights reserved.</p>
        <p>v2.4.1 • Secure Session</p>
      </footer>

    </div>
  );
};

export default HomePage;