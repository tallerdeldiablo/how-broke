import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      budgets {
        _id
        billName
        billsDescription
        createdAt
      }
    }
  }
`;

export const QUERY_BUDGETS = gql`
  query getBudgets {
    budgets {
      _id
      billName
      billsDescription
      createdAt
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($budgets: [ID]!) {
    checkout(budgets: $budgets) {
      session
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      budgets {
        _id
        billName
        createdAt
      }
    }
  }
`;