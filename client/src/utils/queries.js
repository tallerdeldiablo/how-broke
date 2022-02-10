import { gql } from '@apollo/client';

export const QUERY_BUDGETS = gql`
  query getBudgets($category: ID) {
    budgets(category: $category) {
      _id
      name
      description
      amountofmoney
      quantity
      image
      category {
        _id
      }
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

export const QUERY_ALL_BUDGETS = gql`
  {
    budgets {
      _id
      name
      description
      amountofmoney
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        budgets {
          _id
          name
          description
          amountofmoney
          quantity
          image
        }
      }
    }
  }
`;
