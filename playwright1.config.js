// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 1,
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        //viewport: { width: 1080, height: 720 },
        screenshot: 'retain-on-failure',
        trace: 'on',//off,on
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        ...devices['samsung Galaxy S20 Ultra'],



      },
    },
    {
      name: 'webkitprofile',
      use: {

        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',//off,on
        ...devices['iPhone 11']
      },
    }
  ]


};

module.exports = config;
