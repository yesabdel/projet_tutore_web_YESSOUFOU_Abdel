

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,

  reporterOptions: {
    charts: true,

    reportPageTitle: "Cypress Inline Reporter",

    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    
    env: {
      url:
        process.env.CYPRESS_ENV_URL ||
        "http://opencruise-ok.sogeti-center.cloud",
      username: "admin@test.com",
      password: "Sogeti33"
      
    },
  },
});
