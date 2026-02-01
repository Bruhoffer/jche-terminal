import type { MarketDatum } from "@/types/domain";

// Skills as tickers with simulated price/percent change.
export const marketData: MarketDatum[] = [
  {
    id: "skill-typescript",
    symbol: "$TS",
    price: 4.8,
    change_percent: 0.7,
  },
  {
    id: "skill-nextjs",
    symbol: "$NEXT",
    price: 4.7,
    change_percent: 0.9,
  },
  {
    id: "skill-react",
    symbol: "$REACT",
    price: 4.6,
    change_percent: 0.5,
  },
  {
    id: "skill-sql",
    symbol: "$SQL",
    price: 4.5,
    change_percent: 0.4,
  },
  {
    id: "skill-python",
    symbol: "$PY",
    price: 4.4,
    change_percent: -0.1,
  },
  {
    id: "skill-analytics",
    symbol: "$ANLT",
    price: 4.9,
    change_percent: 1.2,
  },
];

