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
    id: "asset-foodheroes",
    ticker: "$FOOD",
    name: "FoodHeroes – Distributed Surplus Marketplace",
    status: "INACTIVE",
    yield: 0.94,
    description:
      "A two-sided community marketplace connecting vendors with surplus food to consumers. Engineered with Vue.js and Firebase, featuring a real-time order lifecycle (Pending → Pickup → Completed), automated inventory synchronization via Cloud Functions, and a 98% sprint velocity over two high-intensity Agile cycles.",
    link: null,
    tech_stack: [
      "Vue.js",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "TailwindCSS",
    ],
  },
  {
    id: "asset-regime-equity",
    ticker: "$VIXA",
    name: "Regime-Adaptive Equity Engine",
    status: "INACTIVE",
    yield: 0.91,
    description:
      "A volatility-aware systematic trading system that dynamically switches between Trend-Following (Calm) and Mean-Reversion (Panic) modules. Engineered with a smoothed-VIX regime detector, achieving a 1.26 In-Sample Sharpe Ratio and 3.5% Max Drawdown through ATR-adjusted risk management and 200SMA trend filters.",
    link: null,
    tech_stack: [
      "Python",
      "Pandas",
      "yfinance",
      "Matplotlib",
      "Monte Carlo Simulation",
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
];

