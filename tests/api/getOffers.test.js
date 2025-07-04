const { graphqlRequest } = require('../../graphql/client');
const { getOffersQuery } = require('../../graphql/queries/getOffers');

describe('GetOffers API', () => {
  it('should fetch flight offers for MAA to LHR', async () => {
    const offerRequest = {
      fareTypes: "ECO",
      passengers: [
        {
          discountCode: "null",
          frequentFlyer: "null",
          passengerTypeCode: "ADT"
        }
      ],
      tripType: "OW",
      trips: [
        {
          departureDateTime: "2025-08-26",
          destination: "LHR",
          isRequestedBound: true,
          origin: "MAA"
        }
      ]
    };

    const response = await graphqlRequest({
      url: 'https://testing-function-app-mock.azurewebsites.net/shop/flights', // Replace with your actual endpoint
      query: getOffersQuery,
      variables: { offerRequest }
    }).toss();

    expect(response.statusCode).toBe(200);
    expect(response.body.data.getOffers).toBeDefined();
    expect(response.body.data.getOffers.response).toBeDefined();
    expect(response.body.data.getOffers.response.connections).toBeDefined();
    // Print response data
    console.log(JSON.stringify(response.body, null, 2));
  },30000);
});
