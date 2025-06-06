import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './pw-tests',      // separate folder from WebdriverIO tests
  reporter: 'list',                   // or "dot" / "html"
  timeout: 60_000,
  use: {
    baseURL: 'http://localhost:8080',
    viewport: { width: 1280, height: 720 },
    headless: true,
  },
  webServer: {
    command: 'npm run start',     // runs: npx static-server public -p 8080
    port: 8080,
    reuseExistingServer: true     // speeds up re-runs if server already running
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});