import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
};

export default config;
