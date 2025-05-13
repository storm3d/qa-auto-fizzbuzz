exports.config = {
  runner: 'local',
  specs: ['./tests/*.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: process.env.HEADLESS === 'false' ? [] : ['--headless=new', '--disable-gpu']
    }
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  services: ['devtools'],
  reporters: ['spec']
};
