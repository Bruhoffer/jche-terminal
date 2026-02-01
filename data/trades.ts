import type { Trade } from "@/types/domain";

// Experience ledger entries (BUY/HLD/LST as transaction types).
export const trades: Trade[] = [
  {
    id: "trade-algebris",
    type: "HLD",
    asset_name: "Algebris Investments",
    role: "Software Engineer Intern",
    duration: "May 2024 – Present",
    impact_metric: "Latency -35% on core data pipelines",
    description:
      "Building internal data tooling and automation to accelerate research workflows and portfolio analytics.",
  },
  {
    id: "trade-monee",
    type: "LST",
    asset_name: "Monee",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2024 – Apr 2024",
    impact_metric: "+18% user engagement on financial dashboards",
    description:
      "Implemented high-performance UI components and backend integrations for consumer finance features.",
  },
  {
    id: "trade-finexis",
    type: "LST",
    asset_name: "Finexis",
    role: "Technology Intern",
    duration: "May 2023 – Aug 2023",
    impact_metric: "Cut reporting time from days to hours",
    description:
      "Prototyped analytics dashboards and reporting pipelines for internal stakeholders.",
  },
  {
    id: "trade-ey",
    type: "LST",
    asset_name: "EY",
    role: "Consulting Intern",
    duration: "Dec 2022 – Feb 2023",
    impact_metric: "Supported >$XM client transformation engagements",
    description:
      "Assisted in data-driven consulting projects focusing on process optimization and risk analytics.",
  },
];

