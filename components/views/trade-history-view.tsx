import type { FC } from "react";

export const TradeHistoryView: FC = () => {
  return (
    <section className="flex h-full flex-col bg-[#0A0A0A] p-4 text-zinc-100">
      {/* TODO: dense ledger table using trades data */}
      <h1 className="text-lg font-semibold tracking-tight">
        $EXP Trade History
      </h1>
    </section>
  );
};
