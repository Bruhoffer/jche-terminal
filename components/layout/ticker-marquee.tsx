"use client";

import type { FC } from "react";

export const TickerMarquee: FC = () => {
  return (
    <div className="w-full border-b border-zinc-800 bg-[#0A0A0A] px-4 py-2 text-xs font-mono text-green-400">
      {/* TODO: replace with animated ticker driven by marketData */}
      <span>$JCHE 4.89 ▲ 1.2%</span>
    </div>
  );
};
