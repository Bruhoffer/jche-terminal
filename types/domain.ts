export type TradeType = "BUY" | "LST" | "HLD";

export interface Asset {
  id: string;
  ticker: string;
  name: string;
  status: string;
  /**
   * Interpreted as performance/impact metric (0–1 or percentage-style).
   */
  yield: number;
  description: string;
  link: string | null;
  tech_stack: string[];
}

export interface Trade {
  id: string;
  type: TradeType;
  /** Company or fund name */
  asset_name: string;
  role: string;
  /** Human-readable, e.g. "May 2024 – Present" */
  duration: string;
  impact_metric: string;
  description: string;
  /** Optional structured bullet points for cleaner display */
  highlights?: string[];
}

export interface Disclosure {
  id: string;
  title: string;
  organization: string;
  /** Stored as string for flexible formatting */
  date: string;
  impact_rating: number | string;
  category: string;
  /** Optional external resource (e.g. PDF, post, transcript) */
  link?: string | null;
}

export interface MarketDatum {
  id: string;
  symbol: string;
  /** Skill level / GPA-style metric */
  price: number;
  /** Simulated daily/rolling change in percent */
  change_percent: number;
}
