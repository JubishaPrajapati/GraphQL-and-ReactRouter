import { gql } from "@apollo/client"

interface UserData {
    id: number;
    user_id: number;
    cap_limit: number;
    membership_charge: number;
    agent_umva_id: string;
    transaction_amount: number;
    transaction_date: string;
    valid_unit: number;
    valid_for: number;
}

export interface GetUserResponse {
    getUserCap: UserData[];
}


export const GET_USER = gql`
query {
    getUserCap {
      id
      user_id
      cap_limit
      membership_charge
      agent_umva_id
      transaction_amount
      transaction_date
      valid_unit
      valid_for
    }
  }
`