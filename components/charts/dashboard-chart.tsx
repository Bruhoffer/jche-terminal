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
import type { TooltipProps } from "recharts";
import {
  buildCareerPerformanceSeries,
  type ChartPoint,
} from "@/lib/chart-data";

const data: ChartPoint[] = buildCareerPerformanceSeries();

const renderTooltip = (props: TooltipProps<number, string>) => {
  const { active, payload } = props;
  if (!active || !payload || payload.length === 0) return null;

  const point = payload[0].payload as ChartPoint;

  return (
    <div className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-mono">
      <div className="text-[10px] uppercase tracking-wide text-zinc-500">
        {point.label}
      </div>
      <div className="text-zinc-100">$JCHE · {point.value.toFixed(0)}</div>
      <div className="mt-1 text-[11px] text-zinc-400">{point.note}</div>
    </div>
  );
};

export const DashboardChart: FC = () => {
  return (
    <div className="h-64 rounded-md border border-zinc-800 bg-zinc-950 px-4 py-3">
      <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>Cumulative Impact Index · $JCHE</span>
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
          <Tooltip content={renderTooltip} />
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
