import React from "react";
import DoughnutChart from "./DoughnutChart";

interface AnalyticCardProps {
  score: number;
  maxScore: number;
  width?: string;
  height?: string;
  text: string;
}

const AnalyticCard: React.FC<AnalyticCardProps> = ({
  score,
  maxScore,
  width,
  height,
  text,
}) => {
  return (
    <div
      className={`${width} ${height} p-[25px] gap-[40px] rounded-[10px] flex bg-white `}
    >
      <div className="text-[24px] leading-[36px] font-bold text-[#75819A]">
        {text}
      </div>
      <DoughnutChart
        score={score}
        maxScore={maxScore}
        primaryColor={score === 15 ? "#FFDF37" : "#0BC279"}
      />
    </div>
  );
};

export default AnalyticCard;
