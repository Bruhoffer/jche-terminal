import type { FC } from "react";

export const OverviewView: FC = () => {
  return (
    <section className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      {/* TODO: DashboardChart + executive summary + recent disclosures + active positions */}
      <h1 className="text-lg font-semibold tracking-tight">$JCHE Overview</h1>
      <p className="text-sm text-zinc-400">
        High-level performance of the Justin Cheong Exchange. Chart,
        disclosures, and active positions will be surfaced here.
      </p>
    </section>
  );
};
