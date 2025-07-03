// Configure HTTPS globally to ignore certificate errors
const https = require('https');
https.globalAgent.options.rejectUnauthorized = false;

// Export the configured https module
module.exports = https;