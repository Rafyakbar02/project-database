"use client";

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
);

export default function PieChart() {
  var data = {
    datasets: [
      {
        data: [10, 20],
        backgroundColor: ["#27A108", "#c23035"],
      },
    ],
    labels: ["Normal", "Due Date"],
  };

  var options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-wrap border border-gray-200 p-4 rounded-2xl justify-around gap-3">
      <h3 className="text-xl my-auto text-center">
        Risk Status
        <br /> (Signed Project)
      </h3>
      <div>
        <Pie height={300} width={300} data={data} options={options} />
      </div>
    </div>
  );
}
