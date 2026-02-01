"use client";

import { DataTable } from "@/components/data-table/data-table";
import type { ColumnDef } from "@/components/data-table/types";
import { MotionSection } from "@/components/layout/motion-section";
import { trades } from "@/data/trades";
import type { Trade } from "@/types/domain";
import { ArrowDownRight, ArrowUpRight, Circle } from "lucide-react";
import type { FC } from "react";

const columns: ColumnDef<Trade>[] = [
  {
    key: "type",
    header: "Type",
    cell: (value) => {
      const type = value as Trade["type"];
      const isBuy = type === "BUY";
      const isHold = type === "HLD";

      const color = isBuy
        ? "text-green-400 border-green-500/40"
        : isHold
          ? "text-blue-400 border-blue-500/40"
          : "text-red-400 border-red-500/40";

      const Icon = isBuy ? ArrowUpRight : isHold ? Circle : ArrowDownRight;

      return (
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide ${color}`}
        >
          <Icon className="h-3 w-3" />
          {type}
        </span>
      );
    },
  },
  {
    key: "asset_name",
    header: "Asset / Role",
    cell: (value, row) => (
      <div className="flex flex-col gap-1">
        <span className="text-zinc-100">{value as string}</span>
        <span className="text-[11px] text-zinc-500">{row.role}</span>
      </div>
    ),
  },
  {
    key: "duration",
    header: "Duration",
  },
  {
    key: "description",
    header: "Description",
    cell: (value, row) => {
      const trade = row as Trade;
      const bullets =
        trade.highlights && trade.highlights.length > 0
          ? trade.highlights
          : [value as string];

      return (
        <div className="max-w-[90%]">
          <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-zinc-400">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {trade.tags && trade.tags.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {trade.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    },
  },
];

export const TradeHistoryView: FC = () => {
  return (
    <MotionSection className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">
          $EXP Trade History
        </h1>
        <p className="text-sm text-zinc-400">
          Experience ledger of executed and active positions across funds and
          firms.
        </p>
      </header>

      {/* Desktop / larger screens: dense table view */}
      <div className="hidden md:block">
        <DataTable
          columns={columns}
          data={trades}
          getRowKey={(row) => row.id}
          emptyState="No trades recorded yet."
        />
      </div>

      {/* Mobile / small screens: stacked card view for readability */}
      <div className="space-y-3 md:hidden">
        {trades.map((trade) => {
          const isBuy = trade.type === "BUY";
          const isHold = trade.type === "HLD";

          const color = isBuy
            ? "text-green-400 border-green-500/40"
            : isHold
              ? "text-blue-400 border-blue-500/40"
              : "text-red-400 border-red-500/40";

          const Icon = isBuy ? ArrowUpRight : isHold ? Circle : ArrowDownRight;

          const bullets =
            trade.highlights && trade.highlights.length > 0
              ? trade.highlights
              : [trade.description];

          return (
            <article
              key={trade.id}
              className="rounded-md border border-zinc-800 bg-zinc-950 p-3 text-xs"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-zinc-100">{trade.asset_name}</span>
                  <span className="text-[11px] text-zinc-500">
                    {trade.role}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide ${color}`}
                >
                  <Icon className="h-3 w-3" />
                  {trade.type}
                </span>
              </div>
              <div className="mb-1 text-[11px] text-zinc-500">
                {trade.duration}
              </div>
              <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-zinc-400">
                {bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {trade.tags && trade.tags.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {trade.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
};
