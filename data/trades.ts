import type { Trade } from "@/types/domain";

// Experience ledger entries (BUY/HLD/LST as transaction types).
export const trades: Trade[] = [
  {
    id: "trade-algebris",
    type: "HLD",
    asset_name: "Algebris Investments",
    role: "Software Engineer Intern",
    duration: "Jan 2026 – Present",
    impact_metric:
      "Building RAG-based search engine for internal usage and data pipelines for financial research",
    description:
      "Architected high-availability RAG-based search and data infrastructure for internal financial research workflows.",
    highlights: [
      "Architected a high-availability RAG-based search engine using Azure AI Search with a Cross-Encoder reranker, reducing P95 retrieval latency by 30%",
      "Engineered a hybrid retrieval pipeline with lexical and semantic fusion plus Boolean filters for exact-match constraints, increasing search relevance (NDCG@10) by 25%",
      "Designed distributed ETL pipelines on Databricks using the Medallion Architecture (Delta Lake) for ACID-compliant, high-availability macro-economic data ingestion",
      "Hardened data delivery with automated unit tests and validation gates, reducing production deployment failures by ~40% through rigorous pre-merge verification",
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
    id: "trade-nus-ta",
    type: "LST",
    asset_name: "National University of Singapore (NUS)",
    role: "Teaching Assistant",
    duration: "Aug 2025 – Dec 2025",
    impact_metric:
      "Achieved 4.7/5.0 overall TA effectiveness, ~9% above School of Computing faculty average",
    description:
      "Teaching Assistant supporting instruction and student learning for School of Computing modules.",
    highlights: [
      "Achieved an overall effectiveness rating of 4.7/5.0, surpassing the School of Computing faculty average (4.3) by ~9%",
      "Improved soft outcomes with a 4.6/5.0 score for enhancing students' industry readiness and team effectiveness",
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

