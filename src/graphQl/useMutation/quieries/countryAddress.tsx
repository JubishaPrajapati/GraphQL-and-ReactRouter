import { gql } from "@apollo/client";

export const COUNTRY_MUTATION = gql`
query{
	getCountries{
		code
		name
	}
}
`

interface CountryObj {
    code: string;
    name: string;
}

export interface CountryResponse {
    getCountries: CountryObj[];
}