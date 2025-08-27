import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.js",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
    retries: {
    runMode: 2,
    openMode: 0
  }
});
