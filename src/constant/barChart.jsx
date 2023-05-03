import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import axios from "axios";
import React from "react";

import {
  Chart as ChartJS,
  //   CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

//y축 데이터
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
  console.log(arr);
}

//x축 데이터
const labels = ["January", "February", "March", "April", "May", "June", "July"];
// var array = [];
// for (var i = 0; i < 10; i++) {
//   array.push("test");
// }
// console.log(array);

export const data = {
  labels,
  datasets: [
    {
      label: "test data",
      data: arr,
      backgroundColor: "rgba(172, 236, 88, 0.5)",
    },
    {
      label: "test data",
      data: arr,
      backgroundColor: "rgba(241, 226, 83, 0.5)",
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default BarChart;
