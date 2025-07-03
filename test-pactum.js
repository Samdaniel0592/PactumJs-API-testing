// Test script to check PactumJS connectivity
const pactum = require('./config/pactum-config');

// Disable SSL verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testPactum() {
  try {
    const response = await pactum.spec()
      .get('https://countries.trevorblades.com/')
      .toss();
    
    console.log('STATUS:', response.statusCode);
    console.log('HEADERS:', JSON.stringify(response.headers, null, 2));
    console.log('Success!');
  } catch (error) {
    console.error('ERROR:', error.message);
  }
}

testPactum();