"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { MarketSidebar } from "@/components/layout/market-sidebar";
import { SystemStatusBar } from "@/components/layout/system-status-bar";
import { TickerMarquee } from "@/components/layout/ticker-marquee";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <CommandPalette />
      {/* Mobile top bar: title + hamburger */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#0A0A0A] px-4 py-2 text-xs font-mono text-zinc-400 md:hidden">
        <span>Justin Cheong</span>
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="flex items-center gap-1 rounded border border-zinc-700 px-2 py-1 text-[11px] hover:border-zinc-500 hover:text-zinc-100"
          aria-label="Open navigation"
        >
          <span className="text-lg leading-none">☰</span>
          <span className="hidden xs:inline">Menu</span>
        </button>
      </div>
      <TickerMarquee />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <MarketSidebar />
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      {/* Mobile sidebar drawer */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 flex md:hidden"
          aria-label="Mobile navigation"
          onClick={() => setMobileNavOpen(false)}
        >
          <div
            className="h-full w-64 max-w-[70%] border-r border-zinc-800 bg-[#0A0A0A]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2 text-[11px] font-mono uppercase text-zinc-500">
              <span>Market Watch</span>
              <button
                type="button"
                className="rounded border border-zinc-700 px-1.5 py-0.5 text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                onClick={() => setMobileNavOpen(false)}
              >
                Close
              </button>
            </div>
            <MarketSidebar
              variant="drawer"
              onItemClick={() => setMobileNavOpen(false)}
            />
          </div>
          <div className="flex-1 bg-black/60" />
        </div>
      )}
      <SystemStatusBar />
    </div>
  );
}
