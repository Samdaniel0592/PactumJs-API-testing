const getCountryQuery = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      capital
    }
  }
`;

module.exports = { getCountryQuery };
