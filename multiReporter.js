const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html/my-report.html"
});