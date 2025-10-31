import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { questions } from "./data/questions";
import Confetti from "react-confetti";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedBack, setShowFeedBack] = useState(false);

  const handleAnswer = (option) => {
    if (showFeedBack) return;
    setSelectedAnswer(option);
    setShowFeedBack(true);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedBack(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedBack(false);
    setIsFinished(false);
  };

  const calculatProgress = () => {
    if (isFinished) return 100;
    const baseProgress = (currentQuestion / questions.length) * 100;
    const questionProgress = selectedAnswer ? (1 / questions.length) * 100 : 0;

    return baseProgress + questionProgress;
  };

  const percentage = (score / questions.length) * 100;
  const showConfetti = isFinished && percentage > 50;

  return (
    <div className="min-h-screen bg-blue-600/15 text-white flex items-center justify-center flex-col p-4 ">
      {showConfetti && <Confetti />}
      <div className=" text-center mb-8">
        <h1 className=" text-4xl text-blue-500 font-bold tracking-tighter">
          Quick-quiz
        </h1>
        <p className=" text-gray-800">Test your knowledge</p>
      </div>

      <div className=" w-full max-w-xl mb-6">
        <div className="bg-gray-700/15 h-3 rounded-full overflow-hidden ">
          <div
            className="h-full bg-linear-to-r from-indigo-500 to bg-purple-600   duration-500 ease-out transition-all rounded-full "
            style={{ width: `${calculatProgress()}%` }}
          ></div>
        </div>
      </div>
      {!isFinished ? (
        <>
          <QuestionCard
            data={questions[currentQuestion]}
            onAnswer={handleAnswer}
            showFeedBack={showFeedBack}
            selected={selectedAnswer}
            total={questions.length}
            current={currentQuestion}
          />
          <div className=" mt-6 min-h-[60px] ">
            {showFeedBack && (
              <button
                onClick={goToNext}
                className=" bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg font-medium mt-6 shadow-lg cursor-pointer "
              >
                {" "}
                {currentQuestion + 1 < questions.length
                  ? "Continue"
                  : "See Results"}{" "}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className=" text-2xl font-bold tracking-tight text-center">
          <h2 className=" text-blue-500 ">Quiz Completed</h2>
          <p className=" text-blue-500 mb-6 ">
            {" "}
            You scored <span> {score} </span> out of{" "}
            <span> {questions.length} </span> and it is{" "}
            {Math.round((score / questions.length) * 100)}%{" "}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg font-medium mt-6 shadow-lg cursor-pointer"
          >
            {" "}
            Restart Quiz{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
