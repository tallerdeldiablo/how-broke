import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($expenseValue: String!, $expenseAuthor: String!) {
    addExpense(expenseValue: $expenseValue, expenseAuthor: $expenseAuthor) {
      _id
      expenseValue
      expenseAuthor
      createdAt
      amounts {
        _id
        amountValue
      }
    }
  }
`;

export const ADD_AMOUNT = gql`
  mutation addAmount(
    $expenseId: ID!
    $amountValue: String!
    $amountAuthor: String!
  ) {
    addAmount(
      expenseId: $expenseId
      amountValue: $amountValue
      amountAuthor: $amountAuthor
    ) {
      _id
      expenseValue
      expenseAuthor
      createdAt
      amounts {
        _id
        amountValue
        createdAt
      }
    }
  }
`;
