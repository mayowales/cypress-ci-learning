const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json/",
  reportPath: "./cypress/reports/html/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
});