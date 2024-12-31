import { gql } from "@apollo/client";

interface GetAddressResponse {
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

export interface GetAddress {
    getCountryAddress: GetAddressResponse[];
}

export const GET_COUNTRY = gql`
  query getCountryAddress {
    getCountryAddress(
        byMain: true
)
    {
    id
        country
        country_code
        area1
        area2
        area3
        area4
        area5
        group
    }
}
`