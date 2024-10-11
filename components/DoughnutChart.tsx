"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Account } from "@/types";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: Account[]; // Replace 'any' with the actual type of your accounts
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const accountName = accounts.map((a) => a.name);
  const balance = accounts.map((a) => a.currentBalance);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: balance,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountName,
  };

  const options = {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bank Accounts Distribution",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
