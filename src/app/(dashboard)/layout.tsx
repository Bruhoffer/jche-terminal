import type { ReactNode } from "react";
import { TickerMarquee } from "@/components/layout/ticker-marquee";
import { MarketSidebar } from "@/components/layout/market-sidebar";
import { SystemStatusBar } from "@/components/layout/system-status-bar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <TickerMarquee />
      <div className="flex flex-1 overflow-hidden">
        <MarketSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <SystemStatusBar />
    </div>
  );
}
