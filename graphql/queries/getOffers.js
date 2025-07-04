const getOffersQuery = `
  query GetOffers($offerRequest: OfferRequest!) {
    getOffers(OfferRequest: $offerRequest) {
      warnings
      response {
        dataLists {
          flights
          SKUDefinition
          services {
            serviceCode
            serviceDescription
          }
          restrictions {
            restrictionCode
            restrictionDescription
          }
        }
        connections {
          departureLocationCode
          arrivalLocationCode
          flightProducts {
            ranking
            duration
            segments {
              flightId
              connectionTime
            }
            flightSKUs {
              SKUId
              SKUCode
              SKUName
              cabinClass
              seatsLeft
              prices {
                unitPrices {
                  paxID
                  prices {
                    baseAmount
                    totalAmount
                    curCode
                    totalTaxAmount
                  }
                }
                totalPrices {
                  baseAmount
                  totalAmount
                  curCode
                  totalTaxAmount
                  taxSummary {
                    amount
                    taxCode
                    taxName
                  }
                }
              }
              services {
                serviceCode
                flightIds
              }
              restrictions
            }
          }
        }
      }
    }
  }
`;

module.exports = { getOffersQuery };
