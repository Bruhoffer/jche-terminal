import type { Trade } from "@/types/domain";

// Experience ledger entries (BUY/HLD/LST as transaction types).
export const trades: Trade[] = [
  {
    id: "trade-algebris",
    type: "HLD",
    asset_name: "Algebris Investments",
    role: "Software Engineer Intern",
    duration: "May 2024 – Present",
    impact_metric:
      "30% reduction in P95 retrieval latency and 25% lift in NDCG@10 on RAG-based search engine",
    description:
      "Architecting high-availability Azure AI Search RAG pipelines with Cross-Encoder reranking, hybrid lexical/semantic retrieval and Databricks ETL, plus tests and validation gates that cut deployment failures by ~40%.",
    highlights: [
      "Architected RAG-based search engine on Azure AI Search with Cross-Encoder reranking and hybrid lexical/semantic retrieval",
      "Reduced P95 retrieval latency by 30% while improving NDCG@10 relevance scores by 25%",
      "Hardened data delivery with unit tests and validation gates, cutting deployment failures by ~40%",
    ],
  },
  {
    id: "trade-nus-fund",
    type: "HLD",
    asset_name: "NUS Student Investment Fund",
    role: "Analyst",
    duration: "Jan 2026 – Present",
    impact_metric:
      "Systematic idea generation and infra support for student-managed equity portfolio",
    description:
      "Analyst contributing systematic equity research and infrastructure for the NUS Student Investment Fund.",
    highlights: [
      "Design and backtest systematic and factor-based equity strategies for the student-managed portfolio",
      "Help maintain research and data infrastructure for screening, backtesting and performance attribution",
    ],
  },
  {
    id: "trade-monee",
    type: "LST",
    asset_name: "Monee",
    role: "Data Engineering Intern",
    duration: "Aug 2025 – Nov 2025",
    impact_metric:
      "60% reduction in end-to-end latency for real-time risk dashboards via Spark Structured Streaming",
    description:
      "Engineered Spark Structured Streaming ETL pipelines and Airflow-based maker–checker reconciliation, improving data availability by 30% and eliminating 95% of downstream reporting errors.",
    highlights: [
      "Engineered Spark Structured Streaming pipelines to normalise multi-source datasets for real-time risk dashboards",
      "Improved end-to-end data latency by 60% on critical monitoring views",
      "Automated maker–checker reconciliation in Airflow, improving availability by 30% and eliminating 95% of reporting errors",
    ],
  },
  {
    id: "trade-finexis",
    type: "LST",
    asset_name: "Finexis",
    role: "Technology Intern",
    duration: "May 2025 – Aug 2025",
    impact_metric:
      "85% reduction in manual processing time via AI-powered workflow on unstructured data",
    description:
      "Architected Python + speech-to-text + OpenAI workflow to extract signals from unstructured data and shipped Tableau dashboards for churn risk and next-purchase prediction.",
    highlights: [
      "Built Python + speech-to-text + OpenAI workflow to extract structured signals from unstructured client data",
      "Cut manual processing time by 85%, enabling same-day data synthesis for the advisory team",
      "Delivered Tableau dashboards for churn risk and next-purchase prediction to C-suite stakeholders",
    ],
  },
  {
    id: "trade-ey",
    type: "LST",
    asset_name: "EY",
    role: "Consulting Intern",
    duration: "May 2024 – Aug 2024",
    impact_metric:
      "Delivered statistically grounded recommendations for financial services clients using R",
    description:
      "Performed quantitative analyses in R to support technology and transformation projects for financial services clients, with a focus on process optimisation and risk analytics.",
    highlights: [
      "Performed statistical analyses in R to support technology and transformation initiatives for financial services clients",
      "Translated quantitative findings into recommendations for process optimisation and risk management",
    ],
  },
];

