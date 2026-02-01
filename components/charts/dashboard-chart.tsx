"use client";

import type { FC } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { buildCareerPerformanceSeries } from "@/lib/chart-data";

const data = buildCareerPerformanceSeries();

export const DashboardChart: FC = () => {
  return (
    <div className="h-64 rounded-md border border-zinc-800 bg-zinc-950 px-4 py-3">
      <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>Performance: $JCHE</span>
        <span>Merit Scholarship → Algebris Intern</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ left: 0, right: 0, top: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="jcheArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="rgba(63,63,70,0.6)"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#a1a1aa", fontSize: 10 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#71717a", fontSize: 10 }}
            width={30}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #27272a",
              borderRadius: 6,
              padding: "6px 8px",
            }}
            labelStyle={{ color: "#e4e4e7", fontSize: 11 }}
            itemStyle={{ color: "#22c55e", fontSize: 11 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#jcheArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
