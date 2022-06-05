import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
    datasets: [
      {
        label: "Percentile",
        data: [65, 59, 80, 81, 56, 55, 40, 100],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };
  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        }
      },
      
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
