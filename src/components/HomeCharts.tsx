"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@radix-ui/themes";

type DataType = {
  name: string;
  earning: number;
  expenses: number;
  savings: number;
};

const data: DataType[] = [
  { name: "Page A", earning: 4000, expenses: 4000, savings: 2400 },
  { name: "Page B", earning: 4000, expenses: 3000, savings: 1398 },
  { name: "Page C", earning: 4000, expenses: 2000, savings: 9800 },
  { name: "Page D", earning: 4000, expenses: 2780, savings: 3908 },
  { name: "Page E", earning: 4000, expenses: 1890, savings: 4800 },
  { name: "Page F", earning: 4000, expenses: 2390, savings: 3800 },
  { name: "Page G", earning: 4000, expenses: 3490, savings: 4300 },
];

const HomeCart = () => {
  return (
    <Box>
      <Box className="max-w-[500px] h-96 bg-white rounded-lg shadow p-4 mt-4">
        <h1 className="text-lg md:text-lg pb-2 font-bold">
          Financial Overview
        </h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="earning" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            <Line type="monotone" dataKey="savings" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default HomeCart;
