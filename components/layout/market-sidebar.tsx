"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Briefcase, GraduationCap, History } from "lucide-react";
import type { FC } from "react";

const NAV_ITEMS = [
  {
    ticker: "$JCHE",
    label: "Overview",
    href: "/overview",
    Icon: Activity,
  },
  {
    ticker: "$EXP",
    label: "Trade History",
    href: "/trade-history",
    Icon: History,
  },
  {
    ticker: "$EDU",
    label: "Disclosures",
    href: "/disclosures",
    Icon: GraduationCap,
  },
  {
    ticker: "$PRJ",
    label: "Asset Pipeline",
    href: "/asset-pipeline",
    Icon: Briefcase,
  },
];

export const MarketSidebar: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-56 flex-col border-r border-zinc-800 bg-[#0A0A0A] px-3 py-4 text-sm text-zinc-200">
      <div className="mb-4 flex items-center justify-between text-xs font-mono uppercase text-zinc-500">
        <span>Market Watch</span>
        <span className="rounded-full border border-zinc-700 px-1.5 py-0.5 text-[9px] text-zinc-400">
          $JCHE
        </span>
      </div>
      <nav className="space-y-1">
        {NAV_ITEMS.map(({ ticker, label, href, Icon }) => {
          const isActive =
            pathname === href || (href === "/overview" && pathname === "/");

          return (
            <Link
              key={href}
              href={href}
              className={`flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs font-mono transition-colors ${
                isActive
                  ? "bg-zinc-900 text-zinc-50"
                  : "text-zinc-300 hover:bg-zinc-900/80 hover:text-zinc-50"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-zinc-500">{ticker}</span>
                <span className="hidden text-[10px] text-zinc-500 sm:inline">
                  {label}
                </span>
              </span>
              <Icon className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
