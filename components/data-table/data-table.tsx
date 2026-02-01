"use client";

import type { FC, ReactNode } from "react";
import type { ColumnDef } from "./types";

interface DataTableProps<TData extends object> {
  columns: ColumnDef<TData>[];
  data: TData[];
  getRowKey?: (row: TData, index: number) => string;
  emptyState?: ReactNode;
}

export const DataTable = <TData extends object>({
  columns,
  data,
  getRowKey,
  emptyState,
}: DataTableProps<TData>) => {
  if (data.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-md border border-dashed border-zinc-800 text-xs text-zinc-500">
        {emptyState ?? "No data available"}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md border border-zinc-800">
      <table className="min-w-full border-collapse bg-[#0A0A0A] text-xs font-mono text-zinc-200">
        <thead className="bg-zinc-950/60 text-[10px] uppercase tracking-wide text-zinc-500">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-3 py-2 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={getRowKey?.(row, rowIndex) ?? rowIndex}
              className="border-t border-zinc-800/60 hover:bg-zinc-900/60"
            >
              {columns.map((column) => (
                <td key={String(column.key)} className="px-3 py-1.5 align-top">
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
