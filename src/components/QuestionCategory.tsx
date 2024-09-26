import React from "react";

interface QuestionCategoryProps {
  text: string;
  subText: string;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({
  text,
  subText,
}) => {
  return (
    <div className="flex gap-[10px] px-[10px]">
      <p className="font-medium text-[18px] leading-[27px] text-[#B2BBCE]">
        {text}
      </p>
      <p className="font-medium text-[18px] leading-[27px] text-[#374258]">
        {subText}
      </p>
    </div>
  );
};

export default QuestionCategory;
