import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import axios from "axios";
import React, { useState, useEffect } from "react";

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

const BarChartTest = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios({
      url: "/api/v1/tibco/dash/get/",
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
              label: "test data",
              data: yData,
              backgroundColor: "rgb(247, 234, 248)",
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

  return (
    <div
      style={{
        position: "absolute",
        margin: "auto",
        // width: "100%",
        // height: "100%",
        left: "0",
        top: "0",
      }}
    >
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default BarChartTest;
