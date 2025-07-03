// Test script to check HTTPS connectivity
const https = require('https');

// Disable SSL verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Make a simple HTTPS request to the API
const req = https.request('https://countries.trevorblades.com/', (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('HEADERS:', JSON.stringify(res.headers, null, 2));
  
  res.on('data', (chunk) => {
    console.log('BODY:', chunk.toString());
  });
});

req.on('error', (e) => {
  console.error('ERROR:', e.message);
});

req.end();