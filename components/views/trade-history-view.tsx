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
      <div className="flex flex-col">
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
    key: "impact_metric",
    header: "Impact",
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
        <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-zinc-400">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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

      <DataTable
        columns={columns}
        data={trades}
        getRowKey={(row) => row.id}
        emptyState="No trades recorded yet."
      />
    </MotionSection>
  );
};
