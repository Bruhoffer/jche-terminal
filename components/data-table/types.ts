import type { ReactNode } from "react";

export interface ColumnDef<TData> {
  key: keyof TData;
  header: string;
  /** Optional custom cell renderer for richer content */
  cell?: (value: TData[keyof TData], row: TData) => ReactNode;
}
