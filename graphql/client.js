const { spec } = require('pactum');

function graphqlRequest({ url, query, variables = {} }) {
  return spec()
    .post(url)
    .withHeaders('Content-Type', 'application/json')
    .withBody({ query, variables });
}

module.exports = { graphqlRequest };
