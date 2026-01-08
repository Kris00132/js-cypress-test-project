const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    screenshotOnRunFailure: true,
    video: false
  },

  env: {
    allure: true,
    allureResultsPath: "allure-results",
    allureReuseAfterSpec: true,
    allureSkipAutomaticScreenshots: false
  }
});
