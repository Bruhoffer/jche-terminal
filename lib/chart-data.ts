// Helpers that map career milestones to Recharts-friendly series data.

export interface ChartPoint {
  label: string;
  value: number;
}

// Static series representing career "equity curve" from scholarship to intern.
export const buildCareerPerformanceSeries = (): ChartPoint[] => {
  return [
    { label: "Merit Scholarship", value: 40 },
    { label: "Year 1 – NUS", value: 55 },
    { label: "Dean's List", value: 68 },
    { label: "EY Intern", value: 72 },
    { label: "Finexis Intern", value: 78 },
    { label: "Monee Intern", value: 86 },
    { label: "Algebris Intern", value: 94 },
  ];
};
