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

export const QUERY_THOUGHTS = gql`
  query getThoughts {
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
      expenses {
        _id
        expenseValue
        createdAt
      }
    }
  }
`;

export const QUERY_EXPENSES = gql`
  query getExpenses {
    expenses {
      _id
      expenseValue
      expenseAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_Expense = gql`
  query getSingleExpense($expenseId: ID!) {
    expense(expenseId: $expenseId) {
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

// export const ADD_BILL = gql`
//   query getBill($expenseID: [ID!]) {
//     expense(expenseId: $expenseId) {
//       bill_group
//       bill_name
//       bill_amount
//     }
//   }
// `;
