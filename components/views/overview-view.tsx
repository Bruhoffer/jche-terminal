import { DashboardChart } from "@/components/charts/dashboard-chart";
import { MotionSection } from "@/components/layout/motion-section";
import { disclosures } from "@/data/disclosures";
import { trades } from "@/data/trades";
import type { FC } from "react";

const recentDisclosures = disclosures.slice(0, 3);
const activePositions = trades.filter((trade) => trade.type === "HLD");

export const OverviewView: FC = () => {
  return (
    <MotionSection className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">$JCHE Overview</h1>
        <p className="text-sm text-zinc-400">
          Equity-style performance of the Justin Cheong Exchange, with latest
          disclosures and active positions.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.25fr)]">
        <DashboardChart />

        <aside className="flex flex-col justify-between gap-4 rounded-md border border-zinc-800 bg-zinc-950 p-4 text-sm">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wide text-zinc-500">
              Executive Summary
            </div>
            <div className="text-base font-semibold">
              The Justin Cheong Exchange ($JCHE)
            </div>
            <p className="text-xs text-zinc-400">
              B.Sc. Business Analytics @ NUS (GPA 4.89/5.00). Currently
              operating as Software Engineer Intern @ Algebris Investments,
              building high-performance data tooling for research and portfolio
              analytics.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-zinc-500">GPA</span>
              <span className="text-sm text-green-400">4.89 / 5.00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-zinc-500">Major</span>
              <span className="text-sm">Business Analytics</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-zinc-500">Node</span>
              <span className="text-sm">NUS → Algebris</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-500">
              Prospectus
            </span>
            <a
              href="/cv.pdf"
              className="inline-flex items-center rounded-full bg-green-500 px-4 py-1.5 text-xs font-mono font-medium text-black shadow-sm transition hover:bg-green-400"
            >
              Buy Prospectus (CV)
            </a>
          </div>
        </aside>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Recent Disclosures</span>
            <span className="text-zinc-600">Latest 3</span>
          </div>
          <div className="space-y-2 text-xs">
            {recentDisclosures.map((d) => (
              <div
                key={d.id}
                className="flex items-start justify-between gap-3 border-t border-zinc-800/60 pt-2 first:border-t-0 first:pt-0"
              >
                <div className="flex-1">
                  <div className="font-medium text-zinc-100">{d.title}</div>
                  <div className="text-[11px] text-zinc-500">
                    {d.organization} • {d.date}
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-400">
                  {d.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Active Positions</span>
            <span className="text-green-400">HLD</span>
          </div>
          <div className="space-y-2 text-xs">
            {activePositions.map((t) => (
              <div
                key={t.id}
                className="flex items-start justify-between gap-3 border-t border-zinc-800/60 pt-2 first:border-t-0 first:pt-0"
              >
                <div className="flex-1">
                  <div className="font-medium text-zinc-100">
                    {t.asset_name} – {t.role}
                  </div>
                  <div className="text-[11px] text-zinc-500">{t.duration}</div>
                  <div className="text-[11px] text-zinc-400">
                    {t.impact_metric}
                  </div>
                </div>
                <span className="mt-1 inline-flex items-center rounded-full border border-green-500/50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-green-400">
                  Open
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MotionSection>
  );
};
