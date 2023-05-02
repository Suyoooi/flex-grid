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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

//y축 데이터 생성
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
  console.log(arr);
}
//x축 데이터 생성
var array = [];
for (var i = 0; i < 10; i++) {
  array.push("test");
}
console.log(array);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: arr,
      backgroundColor: "rgba(80, 230, 100, 0.5)",
    },
    {
      label: "Dataset 2",
      data: arr,
      backgroundColor: "rgba(230, 148, 72, 0.5)",
    },
  ],
};

const BarChartTest = () => {
  return <Bar options={options} data={data} />;
};
export default BarChartTest;

// const BarChartTest = () => {
//   const [chartData, setChartData] = React.useState(null);

//   React.useEffect(() => {
//     axios({
//       url: "/api/v1/tibco/dash/get/top",
//       method: "post",
//       data: {
//         service: "queue",
//         data_name: ["pendMsgSize", "pendMsgCnt"],
//       },
//     })
//       .then((response) => {
//         const xData = response.data.data.map(
//           (data) => data.emsServer.srvrAlias
//         );
//         console.log(xData);
//         const yData = response.data.data.map((data) => data.queue.pendMsgCnt);
//         console.log(yData);
//         const chartData = {
//           labels: xData,
//           datasets: [
//             {
//               label: "My First Dataset",
//               data: yData,
//               fill: true,
//               borderColor: "rgb(247, 234, 248)",
//               tension: 0.1,
//             },
//           ],
//         };
//         setChartData(chartData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const options = {
//     // maintainAspectRatio와 함께 사용하여 차트의 크기를 조절합니다.
//     responsive: false,
//     // 가로 세로 비율을 고정하지 않습니다.
//     maintainAspectRatio: false,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <Container>
//       <div
//         style={{
//           position: "absolute",
//           margin: "auto",
//           // width: "100%",
//           // height: "100%",
//           left: "0",
//           top: "0",
//         }}
//       >
//         {chartData && <Bar data={chartData} options={options} />}
//       </div>
//     </Container>
//   );
// };

// export default BarChartTest;

// const Container = styled.div`
//   margin: auto;
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;
