"use client";

import dynamic from 'next/dynamic';

import React, { useState } from "react";
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const IncomeExpenseBarChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Expenses",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div>
      <ApexCharts options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default IncomeExpenseBarChart;
