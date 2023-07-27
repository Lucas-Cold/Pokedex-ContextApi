const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9zn1z2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
