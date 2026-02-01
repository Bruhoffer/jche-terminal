"use client";

import type { FC } from "react";

export const MarketSidebar: FC = () => {
  return (
    <aside className="flex h-full w-56 flex-col border-r border-zinc-800 bg-[#0A0A0A] px-3 py-4 text-sm text-zinc-200">
      {/* TODO: wire up real navigation + lucide-react icons */}
      <div className="mb-4 text-xs font-mono uppercase text-zinc-500">
        Market Watch
      </div>
      <nav className="space-y-1">
        <button className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-mono hover:bg-zinc-900">
          <span>$JCHE</span>
          <span className="text-zinc-500">Overview</span>
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-mono hover:bg-zinc-900">
          <span>$EXP</span>
          <span className="text-zinc-500">Trade History</span>
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-mono hover:bg-zinc-900">
          <span>$EDU</span>
          <span className="text-zinc-500">Disclosures</span>
        </button>
        <button className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-mono hover:bg-zinc-900">
          <span>$PRJ</span>
          <span className="text-zinc-500">Asset Pipeline</span>
        </button>
      </nav>
    </aside>
  );
};
