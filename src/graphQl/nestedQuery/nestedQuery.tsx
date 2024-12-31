import { gql } from "@apollo/client";

interface ValueTypeObj {
  id: number;
  code: string;
  name: string;
  alphabetic_code: string;
  numeric_code: number;
  decimal_fraction: number;
}


interface ExchangeObj {
  buy_value: number;
  average_value: number;
  bank_value_type_id: number;
  to_value_type_id: number;
  from_value: number;
  to_value: number;
  created_date: string;
  value_type: ValueTypeObj;
}

export interface ExchangeRateResponse {
  ExchangeRate: ExchangeObj[];
}


export const GET_EXCHANGERATE = gql`
query ($byBankId: ID) {
    ExchangeRate(byBankId: $byBankId) {
      buy_value
      average_value
      bank_value_type_id
      to_value_type_id
      from_value
      to_value
      created_date
      value_type {
        id
        code
        name
        alphabetic_code
        numeric_code
        decimal_fraction
      }
    }
  }
`
