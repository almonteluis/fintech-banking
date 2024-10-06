"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: Account[]; // Replace 'any' with the actual type of your accounts
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bank Accounts Distribution',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;