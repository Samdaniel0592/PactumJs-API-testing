// Disable SSL certificate verification for all HTTP requests
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Import the HTTPS configuration
require('./config/https-config');
