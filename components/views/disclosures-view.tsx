import { disclosures } from "@/data/disclosures";
import { MotionSection } from "@/components/layout/motion-section";
import type { FC } from "react";

export const DisclosuresView: FC = () => {
  return (
    <MotionSection className="flex h-full flex-col gap-4 bg-[#0A0A0A] p-4 text-zinc-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold tracking-tight">
          $EDU Disclosures
        </h1>
        <p className="text-sm text-zinc-400">
          Regulatory-style summary of academic standing, awards, and high-impact
          coursework.
        </p>
      </header>

      <div className="overflow-x-auto rounded-md border border-zinc-800 bg-zinc-950">
        <table className="min-w-full border-collapse text-xs font-mono text-zinc-200">
          <thead className="bg-zinc-950/60 text-[10px] uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-3 py-2 text-left">Title</th>
              <th className="px-3 py-2 text-left">Organization</th>
              <th className="px-3 py-2 text-left">Date</th>
              <th className="px-3 py-2 text-left">Impact</th>
              <th className="px-3 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {disclosures.map((d) => (
              <tr
                key={d.id}
                className="border-t border-zinc-800/60 hover:bg-zinc-900/60"
              >
                <td className="px-3 py-1.5 align-top text-zinc-100">
                  {d.title}
                </td>
                <td className="px-3 py-1.5 align-top text-zinc-400">
                  {d.organization}
                </td>
                <td className="px-3 py-1.5 align-top text-zinc-400">
                  {d.date}
                </td>
                <td className="px-3 py-1.5 align-top text-zinc-300">
                  {String(d.impact_rating)}
                </td>
                <td className="px-3 py-1.5 align-top">
                  <span className="inline-flex items-center rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-400">
                    {d.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MotionSection>
  );
};
