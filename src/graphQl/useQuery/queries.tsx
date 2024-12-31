import { gql } from '@apollo/client';  //gql is a template literal tag 

//Defining the Query
// GET_ROLES: This is a constant that stores the GraphQL query.
// query: The keyword used to define a GraphQL query.
//GetUsers: The name of the query. 
//roles: The field being queried from the server.
//{ id, name }: specific fields being requested for each user.
//$isMain: variables that should be boolean
export const GET_USERS = gql`    
query GetUsers{
users{
    id
    name
    email
    }
}
`;

export const GET_ROLES = gql`
    query roles($isMain: Boolean) {
    roles(isMain: $isMain) {
    id
    name
    guard_name
    is_main

    
  }
}

`
//this query asks graphql server a list of users