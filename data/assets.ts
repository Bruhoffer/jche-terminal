import type { Asset } from "@/types/domain";

// Project assets in the Justin Cheong Exchange.
export const assets: Asset[] = [
  {
    id: "asset-drawmyroute",
    ticker: "$DRWT",
    name: "DrawMyRoute – AI Geospatial Engine",
    status: "ACTIVE",
    yield: 0.92,
    description:
      "AI-powered geospatial engine that generates optimized, constraint-aware routes for logistics and personal travel.",
    link: null,
    tech_stack: ["Next.js", "TypeScript", "Node.js", "Maps API", "PostgreSQL"],
  },
  {
    id: "asset-terminal-portfolio",
    ticker: "$JCHE",
    name: "The Justin Cheong Exchange",
    status: "ACTIVE",
    yield: 0.87,
    description:
      "High-performance trading terminal interface for Justin's portfolio, experience, and skills.",
    link: null,
    tech_stack: ["Next.js", "TypeScript", "TailwindCSS", "recharts", "framer-motion"],
  },
  {
    id: "asset-data-pipelines",
    ticker: "$PIPE",
    name: "Analytics Pipeline Toolkit",
    status: "PIPELINE",
    yield: 0.8,
    description:
      "Reusable components for building low-latency analytics and reporting pipelines.",
    link: null,
    tech_stack: ["Python", "SQL", "dbt", "Airflow"],
  },
];

