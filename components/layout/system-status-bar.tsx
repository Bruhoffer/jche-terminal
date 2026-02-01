"use client";

import type { FC } from "react";

export const SystemStatusBar: FC = () => {
  return (
    <footer className="flex w-full items-center justify-between border-t border-zinc-800 bg-[#0A0A0A] px-4 py-1 text-[10px] font-mono text-zinc-500">
      <span>Node Location: Singapore</span>
      <span>Latency: 12ms</span>
      <span>V.2.1.0</span>
    </footer>
  );
};
