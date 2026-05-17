"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "May 1",
    sales: 5000,
  },
  {
    name: "May 5",
    sales: 8000,
  },
  {
    name: "May 8",
    sales: 6500,
  },
  {
    name: "May 12",
    sales: 10000,
  },
  {
    name: "May 15",
    sales: 11000,
  },
  {
    name: "May 18",
    sales: 15000,
  },
  {
    name: "May 20",
    sales: 12000,
  },
  {
    name: "May 23",
    sales: 14000,
  },
  {
    name: "May 26",
    sales: 18000,
  },
  {
    name: "May 29",
    sales: 12000,
  },
];

export default function SalesChart() {
  return (
    <div className="h-[350px] w-full">
      
      <ResponsiveContainer width="100%" height="100%">
        
        <LineChart data={data}>
          
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}