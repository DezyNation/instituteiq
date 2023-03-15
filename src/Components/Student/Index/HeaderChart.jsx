import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //X-axis
  LinearScale, //Y-axis
  PointElement,
} from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HeaderChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        labels: "Stats of the week",
        data: [20,25,20,100,20],
        backgroundColor: "#1F78B4",
        borderColor: "#1F78B4",
      },
      {
        labels: "Stats of the week",
        data: [40,60,20,60,120],
        backgroundColor: "#B2DF8A",
        borderColor: "#B2DF8A",
      },
      {
        labels: "Stats of the week",
        data: [60,10,80,40,60],
        backgroundColor: "#33A02C",
        borderColor: "#33A02C",
      },
      {
        labels: "Stats of the week",
        data: [80,100,65,80,115],
        backgroundColor: "#A6CEE3",
        borderColor: "#A6CEE3",
      },
      {
        labels: "Stats of the week",
        data: [100,110,115,90,85],
        backgroundColor: "#FB9A99",
        borderColor: "#FB9A99",
      },
    ],
  };

  const options = {
    reponsive: true,
    plugins: {
      legend: true
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    scales: {
      y: {
        min: 0,
        max: 125,
      },
    },
  };

  return (
    <Box w="474px">
      <Line data={data} options={options}></Line>
    </Box>
  );
};

export default HeaderChart;
