import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import axios from "axios";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { API_URL, DASHBOARD_API } from "../api/apiUrl";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// POST 요청 보내기
// y축 데이터 생성
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
// receivedData에서 데이터를 가져와 arr에 추가
// arr.push(receivedData.queue.pendMsgSize);
console.log(arr);

// x축 데이터 생성
const array = [];
for (let i = 0; i < 10; i++) {
  array.push("test");
}
// receivedData에서 데이터를 가져와 array에 추가
// array.push(receivedData.emsServer.srvrAlias);
console.log(array);

const options = {
  // responsive 속성을 false로 지정한다.
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

axios({
  url: "/api/v1/tibco/dash/get/top",
  method: "post",
  data: {
    service: "queue",
    data_name: ["pendMsgSize", "pendMsgCnt"],
  },
})
  .then(function a(response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const data = {
  labels: array,
  datasets: [
    {
      label: "My First Dataset",
      data: arr,
      fill: true,
      borderColor: "rgb(247, 234, 248)",
      tension: 0.1,
    },
  ],
};

// Line.register(CategoryScale);

const ReactChartTest2 = () => {
  return (
    // <Container>
    <div
      style={{
        position: "absolute",
        margin: "auto",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
      }}
    >
      <Line data={data} />
    </div>
    // </Container>
  );
};

export default ReactChartTest2;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 10px;
  /* width: 300px;
  height: 100px;
  resize: both;
  margin: auto; */
  /* margin-top: 100px;
  margin-bottom: 200px; */
`;
