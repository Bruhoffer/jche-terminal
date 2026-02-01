import { assets } from "@/data/assets";
import { formatPercent } from "@/lib/metrics";
import type { FC } from "react";

const statusColorClasses: Record<string, string> = {
  ACTIVE: "border-green-500/40 text-green-400",
  PIPELINE: "border-blue-500/40 text-blue-400",
  ARCHIVED: "border-zinc-600 text-zinc-400",
};

export const AssetPipelineView: FC = () => {
  return (
    <section className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">
          $PRJ Asset Pipeline
        </h1>
        <p className="text-sm text-zinc-400">
          Portfolio of project assets in the Justin Cheong Exchange, with status
          and indicative yield.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {assets.map((asset) => {
          const statusClass =
            statusColorClasses[asset.status] ?? "border-zinc-600 text-zinc-400";

          return (
            <article
              key={asset.id}
              className="flex flex-col justify-between rounded-md border border-zinc-800 bg-zinc-950 p-4 text-xs font-mono"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500">{asset.ticker}</span>
                  <span className="text-sm font-semibold text-zinc-100">
                    {asset.name}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${statusClass}`}
                  >
                    {asset.status}
                  </span>
                  <span className="text-[11px] text-green-400">
                    Yield {formatPercent(asset.yield)}
                  </span>
                </div>
              </div>
              <p className="mb-3 text-[11px] leading-relaxed text-zinc-400">
                {asset.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {asset.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {asset.link && (
                  <a
                    href={asset.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-green-400 hover:text-green-300"
                  >
                    View Asset ↗
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
