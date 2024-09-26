import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  score: number;
  maxScore: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  score,
  maxScore,
  secondaryColor = "#F1F5F8",
  primaryColor = "#0BC279",
}) => {
  const percentage = Math.floor((score / maxScore) * 100);

  const data = {
    datasets: [
      {
        data: [score, maxScore - score],
        backgroundColor: [primaryColor, secondaryColor],
        borderColor: [primaryColor, secondaryColor],
        borderWidth: [8, 4],
        hoverOffset: 0,
        borderRadius: percentage === 100 ? 0 : [10, 0],
      },
    ],
  };

  const options = {
    cutout: "90%",

    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-[196px] h-[196px]">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[30px] text-[#75819A] leading-[36px] font-semibold">
          {percentage} %
        </p>
        <p className="text-[14px] text-[#75819A] leading-[36px]">
          {score} / {maxScore}
        </p>
      </div>
    </div>
  );
};

export default DoughnutChart;
