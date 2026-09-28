import { gql } from '@apollo/client';

export const UPDATE_MONTHLY_INCOME = gql`
  mutation updateMonthlyIncome($monthlyIncome: Float!) {
    updateMonthlyIncome(monthlyIncome: $monthlyIncome) {
      _id
      monthlyIncome
    }
  }
`;

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
  mutation addExpense($expenseValue: String!, $expenseAuthor: String!, $amount: Float) {
    addExpense(expenseValue: $expenseValue, expenseAuthor: $expenseAuthor, amount: $amount) {
      _id
      expenseValue
      amount
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
