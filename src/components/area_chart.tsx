"use client";

import React from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";

interface AreaChartProps {
  data: number[];
  categories: string[];
  title: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, categories, title }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#3A70FF"],
    title: {
      text: title,
      align: "left",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    fill: {
      opacity: 0.8,
    },
    markers: {
      size: 5,
      colors: ["#3A70FF"],
      strokeColors: "#fff",
      strokeWidth: 2,
      shape: "circle",
      hover: {
        size: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
  };

  return (
    <Box sx={{ p: 2, borderRadius: 3, bgcolor: "background.paper" }}>
      <Chart
        options={chartOptions}
        series={[{ name: "Data", data: data }]}
        type="area"
        height={400}
      />
    </Box>
  );
};

export default AreaChart;
