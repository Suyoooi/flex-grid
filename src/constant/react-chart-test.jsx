import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import axios from "axios";
import React from "react";

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

const ReactChartTest = () => {
  const [chartData, setChartData] = React.useState(null);

  React.useEffect(() => {
    axios({
      url: "/api/v1/tibco/dash/get/top",
      method: "post",
      data: {
        service: "queue",
        data_name: ["pendMsgSize", "pendMsgCnt"],
      },
    })
      .then((response) => {
        const xData = response.data.data.map(
          (data) => data.emsServer.srvrAlias
        );
        console.log(xData);
        const yData = response.data.data.map((data) => data.queue.pendMsgCnt);
        console.log(yData);
        const chartData = {
          labels: xData,
          datasets: [
            {
              label: "My First Dataset",
              data: yData,
              fill: true,
              borderColor: "rgb(247, 234, 248)",
              tension: 0.1,
            },
          ],
        };
        setChartData(chartData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    // maintainAspectRatio와 함께 사용하여 차트의 크기를 조절합니다.
    responsive: false,
    // 가로 세로 비율을 고정하지 않습니다.
    maintainAspectRatio: false,
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

  return (
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
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default ReactChartTest;
