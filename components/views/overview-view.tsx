import { DashboardChart } from "@/components/charts/dashboard-chart";
import { MotionSection } from "@/components/layout/motion-section";
import { disclosures } from "@/data/disclosures";
import { trades } from "@/data/trades";
import Link from "next/link";
import type { FC } from "react";

const recentDisclosures = disclosures.slice(0, 3);
const activePositions = trades.filter((trade) => trade.type === "HLD");

export const OverviewView: FC = () => {
  return (
    <MotionSection className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">
          Justin Cheong · $JCHE Overview
        </h1>
      </header>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.25fr)]">
        <DashboardChart />

        <aside className="flex flex-col justify-between gap-4 rounded-md border border-zinc-800 bg-zinc-950 p-4 text-sm">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wide text-zinc-500">
              Trade Thesis · Long $JCHE
            </div>
            <div className="text-base font-semibold">
              Software &amp; Data Engineer
            </div>
            <p className="space-y-1 text-xs text-zinc-400">
              <span className="block">
                Full-stack engineer and analyst focused on building the
                technical infrastructure required for systematic research. My
                experience ranges from architecting RAG-based search engines and
                data pipelines to developing regime-adaptive backtesting
                frameworks for equity strategies.
              </span>
            </p>
          </div>
          {/* Parent Container */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-mono">
            {/* Major Section */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-zinc-500">Major</span>
              <span className="text-sm">Business Analytics</span>
            </div>
            {/* GPA Section */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-zinc-500">GPA</span>
              <span className="text-sm text-green-400">4.89 / 5.00</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-500"></span>
            <a
              href="mailto:justin.cheong@u.nus.edu?subject=Execute%20Trade%20on%20%24JCHE"
              className="inline-flex items-center rounded-full bg-green-500 px-4 py-1.5 text-xs font-mono font-medium text-black shadow-sm transition hover:bg-green-400"
            >
              Execute Trade | Email Justin
            </a>
          </div>
        </aside>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Recent Disclosures</span>
          </div>
          <div className="space-y-2 text-xs">
            {recentDisclosures.map((d) => (
              <Link
                key={d.id}
                href="/disclosures"
                className="flex items-start justify-between gap-3 border-t border-zinc-800/60 pt-2 text-left first:border-t-0 first:pt-0 hover:bg-zinc-900/60"
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
              </Link>
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
              <Link
                key={t.id}
                href="/trade-history"
                className="flex items-start justify-between gap-3 border-t border-zinc-800/60 pt-2 text-left first:border-t-0 first:pt-0 hover:bg-zinc-900/60"
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
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Risk Management</span>
          </div>
          <div className="grid gap-2 text-[11px] font-mono text-zinc-400 sm:grid-cols-2">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-zinc-500">
                Languages
              </div>
              <div>Java, Python, SQL, R, JavaScript / TypeScript</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-zinc-500">
                Data &amp; Pipelines
              </div>
              <div>PySpark, SparkSQL, Data Warehousing, Big Data Analytics</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-zinc-500">Testing</div>
              <div>pytest-style unit tests and data-validation gates</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-zinc-500">
                Infra &amp; Orchestration
              </div>
              <div>Databricks, Airflow, Docker, Azure DevOps (CI/CD)</div>
            </div>
          </div>
        </section>
      </div>
    </MotionSection>
  );
};
