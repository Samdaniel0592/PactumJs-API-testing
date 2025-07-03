const { graphqlRequest } = require('../../graphql/client');
const { getCountryQuery } = require('../../graphql/queries/getCountries');

describe('User Regression', () => {
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
