/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
   setupFiles: ['./jest.setup.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        "publicPath": "./html-report",
        "filename": "report.html",
        "expand": true
      }
    ]
  ]
};


