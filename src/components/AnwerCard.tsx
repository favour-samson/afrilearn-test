import React from "react";

interface AnswerCardProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({
  id,
  label,
  isSelected,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center px-4 py-2 cursor-pointer max-w-[1202px]  gap-[16px] ${
        isSelected ? "bg-[#F3FBF8] rounded-[5px]" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center w-[30px] h-[30px] border-[3px] rounded-[56px]  ${
          isSelected ? "border-[#0BC279]" : "border-[#989CAD]"
        }`}
      ></div>

      <span className="text-[16px] font-medium leading-[24px] text-primary">
        {label}
      </span>
    </div>
  );
};

export default AnswerCard;
