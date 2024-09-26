import React from "react";

interface QuestionBtnProps {
  icon: React.ReactNode;
  text: string;
  bgColor?: string;
}

const QuestionBtn: React.FC<QuestionBtnProps> = ({ icon, text, bgColor }) => {
  return (
    <div
      className={`px-[10px] py-[9px] cursor-pointer ${
        bgColor ? "rounded-[6px]" : ""
      }`}
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <div className="flex items-center gap-[10px]">
        <div>{icon}</div>
        <span
          className={`text-[16px] font-medium leading-[24px]  ${
            bgColor ? "text-white" : "text-primary"
          }  `}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default QuestionBtn;
