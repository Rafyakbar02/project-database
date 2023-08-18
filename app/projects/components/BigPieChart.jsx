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
};

export default function BigPieChart({ title, data, height, width }) {
  return (
    <div className="flex flex-wrap border border-gray-200 p-4 rounded-2xl justify-around gap-3">
      <h3 className="text-xl my-auto text-left w-36">{title}</h3>
      <div>
        <Pie height={height} width={width} data={data} options={options} />
      </div>
    </div>
  );
}
