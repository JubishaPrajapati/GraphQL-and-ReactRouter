import { gql } from "@apollo/client";

interface GetCountryAddressResponse {
  id: number;
  country_code: string;
  country: string;
  area1: String;
  area2: string;
  area3: String;
  area4: string;
  area5: string;
  group: string;
  latitude: number;
  longitude: number;
}

export interface Getresponse {
  getCountryAddress: GetCountryAddressResponse[];
}



export const GET_COUNTRY = gql`
    query (
  $byMain: Boolean
  $byCountry: String
  $byArea1: String
  $byArea2: String
  $byArea3: String
  $byArea4: String
  $byArea5: String
  $byCountryAddress: CountryAddressInput
) {
  getCountryAddress(
    byMain: $byMain
    byCountry: $byCountry
    byArea1: $byArea1
    byArea2: $byArea2
    byArea3: $byArea3
    byArea4: $byArea4
    byArea5: $byArea5
    byCountryAddress: $byCountryAddress
  ) {
    id
    country_code
    country
    area1
    area2
    area3
    area4
    area5
    group
    latitude
    longitude
  }
}
`