const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {
    charts: true,
    autoOpen: true,  //גורם להוספת קובץ בתיקיית הורדות
    reportPageTitle : 'try',
    reportDir: 'cypress/results',
    reportFilename: "[name]",
    useInlineDiffs: true,
    inlineAssets: false,   // האם להציג תיקיית סטייל בנפרד
    html: true,
    json: false,
    overwrite: true,
    embeddedScreenshots:true,
    ignoreVideos: false,  // לא יציג את הוידאו, גם אם מוגדר video:true
    saveAllAttempts: true,
    screenshotsFolder: 'cypress/screenshots',
    showFailed:false,
    showHooks:'always',
    mochaFile: "cypress/results/junit-report[hash].xml"

    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit-report[hash].xml"
    }
  },

  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
})
