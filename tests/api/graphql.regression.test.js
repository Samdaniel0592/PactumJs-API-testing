const { graphqlRequest } = require('../../graphql/client');
const { getCountryQuery } = require('../../graphql/queries/getCountries');

describe('GraphQL - Country API Regression', () => {
  it('should fetch country name by code (US)', async () => {
    const response = await graphqlRequest({
      url: 'https://countries.trevorblades.com/',
      query: getCountryQuery,
      variables: { code: 'US' }
    }).toss();
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      data: {
        country: {
          name: 'United States',
          capital: 'Washington D.C.'
        }
      }
    });
  });

  it('should fetch country name by code (CA)', async () => {
    const response = await graphqlRequest({
      url: 'https://countries.trevorblades.com/',
      query: getCountryQuery,
      variables: { code: 'CA' }
    }).toss();
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      data: {
        country: {
          name: 'Canada',
          capital: 'Ottawa'
        }
      }
    });
  });
});


