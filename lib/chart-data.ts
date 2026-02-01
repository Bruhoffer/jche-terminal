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
// Experience-only, starting at 0 and accelerating towards recent roles.
// Labels are just key months; notes combine all roles active in that month.
export const buildCareerPerformanceSeries = (): ChartPoint[] => {
  return [
    {
      label: "May '24",
      value: 0,
      note: "EY – Technology Consulting Intern",
    },
    {
      label: "May '25",
      value: 17,
      note: "Finexis – Analytics & Engineering Intern",
    },
    {
      label: "Aug '25",
      value: 39,
      note: "Monee – Data Engineering Intern | NUS – Teaching Assistant",
    },
    {
      label: "Jan '26",
      value: 73,
      note: " Algebris Investments – Software Engineer Intern |                 NUS Student Investment Fund – Analyst",
    },
  ];
};
