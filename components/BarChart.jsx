"use client";

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function BarChart() {
  var data = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "# of projects",
        data: [5, 6, 3],
        backgroundColor: "#27A108",
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex gap-3 flex-wrap border border-gray-200 p-4 rounded-2xl justify-around mb-3">
      <div className="text-center my-auto">
        <p className="text-3xl sm:text-4xl font-bold">344.4 T</p>
        <h3 className="text-sm">Total Investment Amount</h3>
      </div>
      <div>
        <Bar height={180} width={250} data={data} options={options} />
      </div>
    </div>
  );
}
