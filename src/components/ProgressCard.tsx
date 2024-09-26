import React from "react";

interface ProgressCardProps {
  BgColor: string;
  text: string;
  width: string;
  percentage: number;
  score: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  BgColor,
  text,
  percentage,
  width,
  score,
}) => {
  return (
    <div className="w-[569px] flex">
      <div className={`h-[38px] rounded-[60px] w-[7px] ${BgColor}`} />
      <div className="border w-[556px] border-[#D1DAE4] ml-[6px] rounded-[10px] items-center flex justify-between">
        <div
          className={`h-[38px] relative rounded-[10px]  flex p-[10px] items-center ${BgColor}`}
          style={{ width }}
        >
          <p className="absolute whitespace-nowrap font-bold text-[18px] leading-[18px]">
            {text}
          </p>
        </div>
        <div className="flex gap-[20px] mr-[15px]">
          <p className="text-[#374258] font-bold leading-[28px] text-[18px]">
            {percentage} %
          </p>
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
