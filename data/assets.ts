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
      "AI-powered routing engine that converts text, prompts and images into road-matched GPS routes using RAG (GPT-4o/Sentence-Transformers), iterative scaling on SVG paths and self-hosted OSRM with custom profiles to handle 100+ concurrent low-latency requests.",
    link: null,
    tech_stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "OSRM",
      "OpenAI",
    ],
  },
  {
    id: "asset-terminal-portfolio",
    ticker: "$JCHE",
    name: "Justin Cheong",
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

