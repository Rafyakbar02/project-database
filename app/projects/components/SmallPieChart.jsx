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

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      align: "center",
      position: "right",
      labels: {
        padding: 10,
      },
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
    },
  },
};

export default function SmallPieChart({ title, data, height, width }) {
  return (
    <div className="border border-gray-200 p-4 rounded-2xl justify-around">
      <h3 className="mb-3">{title}</h3>
      <div>
        <Pie height={height} width={width} data={data} options={options} />
      </div>
    </div>
  );
}
