import { gql } from "@apollo/client";



export const GENDER_MUTATION = gql`
    query{
	getGenders{
		id
		gender
	}
}
`
interface GenderObj {
	id: string;
	gender: string;
}

export interface GenderResponse {
	getGenders: GenderObj[];
}

