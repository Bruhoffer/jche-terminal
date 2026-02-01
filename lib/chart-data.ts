// Helpers that map career milestones to Recharts-friendly series data.

export interface ChartPoint {
  /** Label shown on the X axis, e.g. "Aug 2021" */
  label: string;
  /** Normalised performance metric (0–100) for the chart */
  value: number;
  /** Short description rendered in the tooltip for additional context */
  note: string;
}

// Static series representing career "equity curve" as a time series with notes.
// You can freely tweak labels / values / notes here to refine the story.
export const buildCareerPerformanceSeries = (): ChartPoint[] => {
  return [
    {
      label: "Aug 2021",
      // Early stage: strong foundation, but a lot of headroom left.
      value: 35,
      note: "Merit Scholarship; started B.Sc. Business Analytics @ NUS",
    },
    {
      label: "Dec 2022",
      // First professional exposure in consulting; step-change in practical impact.
      value: 55,
      note: "Consulting Intern @ EY – supporting client transformation projects",
    },
    {
      label: "Aug 2023",
      // Deeper technical ownership over analytics tooling.
      value: 70,
      note: "Technology Intern @ Finexis – analytics dashboards & reporting",
    },
    {
      label: "Apr 2024",
      // End-to-end product work on data-heavy financial dashboards.
      value: 84,
      note: "Full-Stack Developer Intern @ Monee – financial dashboards & integrations",
    },
    {
      label: "May 2024",
      // High-conviction role focused on research and portfolio analytics infra.
      value: 95,
      note: "Software Engineer Intern @ Algebris Investments – internal data tooling",
    },
  ];
};
