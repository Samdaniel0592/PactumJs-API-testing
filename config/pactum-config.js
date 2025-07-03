const pactum = require('pactum');

// Configure PactumJS to ignore SSL errors
pactum.request.setDefaultTimeout(10000); // Increase timeout to 10 seconds
pactum.settings.setRequestDefaultRetryCount(2); // Retry failed requests twice

module.exports = pactum;