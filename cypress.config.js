const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on ('file:preprocessor', browserify.default(config))
  return config;
}

module.exports = defineConfig({
  projectId: "vkwa3e",
  e2e: {
    baseUrl: "https://staging.trymima.com/",
    defaultCommandTimeout: 30000,
    viewportHeight: 938,
    viewportWidth: 1520,
    watchForFileChanges: false,
    retries: {
      openMode: 0,
      runMode: 0,
    },
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
