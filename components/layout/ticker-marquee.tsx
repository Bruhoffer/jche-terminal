"use client";

import { marketData } from "@/data/market-data";
import type { FC } from "react";

export const TickerMarquee: FC = () => {
  const items = [...marketData, ...marketData];

  return (
    <div className="w-full overflow-hidden border-b border-zinc-800 bg-[#0A0A0A]">
      <div className="flex min-w-max animate-[marquee_30s_linear_infinite] gap-8 px-4 py-2 text-[11px] font-mono">
        {items.map((item, index) => {
          const isPositive = item.change_percent >= 0;
          const sign = isPositive ? "▲" : "▼";
          const colorClass = isPositive ? "text-green-400" : "text-red-400";

          return (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-1 text-zinc-400"
            >
              <span className="text-zinc-500">{item.symbol}</span>
              <span>{item.price.toFixed(2)}</span>
              <span className={colorClass}>
                {sign} {item.change_percent.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
