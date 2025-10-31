import React from "react";

const QuestionCard = ({
  data,
  onAnswer,
  showFeedBack,
  selected,
  current,
  total,
}) => {
  const { question, options, answer } = data;

  const getButtonStyle = (option) => {
    if (!showFeedBack) {
      return "bg-indigo-700 hover:indigo-600 hover:scale-[1.01]";
    }

    if (option === answer) return "bg-emerald-600";
    if (option === selected) return "bg-rose-600";
    return "bg-gray-600";
  };

  return (
    <div className="bg-blue-500/15 p-6 rounded-xl shadow-lg max-w-xl w-full  border border-blue-700/15">
      <p className="text-slate-700 mb-6 tracking-tighter font-medium ">
        <div className=" flex justify-between items-center  mb-4">
          <h2>
            {" "}
            Question {current + 1} of {total}
          </h2>
          <span
            className="text-sm bg-green-300/60
           rounded-full px-3 py-1 text-gray-600 "
          >
            {selected
              ? Math.round(((current + 1) / total) * 100) + "% complete"
              : Math.round((current / total) * 100) + "% complete"}
          </span>
        </div>

        {question}
      </p>
      <div className=" grid  gap-3">
        {options.map((option, i) => (
          <button
            onClick={() => onAnswer(option)}
            key={i}
            disabled={showFeedBack}
            className={` ${getButtonStyle(
              option
            )} cursor-pointer text-left px-4 py-3  rounded-lg `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
