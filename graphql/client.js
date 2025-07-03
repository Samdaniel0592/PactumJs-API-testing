// Import configured modules
require('../config/https-config');
const pactum = require('../config/pactum-config');
const { spec } = pactum;

function graphqlRequest({ url, query, variables = {} }) {
  return spec()
    .post(url)
    .withHeaders('Content-Type', 'application/json')
    .withBody({ query, variables });
}

module.exports = { graphqlRequest };
