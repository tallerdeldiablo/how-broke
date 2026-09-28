const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Budget {
    _id: ID
    billName: String
    budgetAuthor: String
    createdAt: String
 
  }


 type Bills {
   _id: ID
   bill_group: String
   bill_name: String
   bill_amount: Float

 } 

type Savings {
  _id: ID
  savngs_amount: Float

}
type User {
  _id: ID
  username: String
  email: String
  password: String
  monthlyIncome: Float
  expenses: [Expense]!
}

type Expense {
  _id: ID
  expenseValue: String
  amount: Float
  expenseAuthor: String
  createdAt: String
  amounts: [Amount]!
}

type Amount {
  _id: ID
  amountValue: String
  amountAuthor: String
  createdAt: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  expenses(username: String): [Expense]
  expense(expenseId: ID!): Expense
}

type Mutation {
  updateMonthlyIncome(monthlyIncome: Float!): User
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addExpense(expenseValue: String!, expenseAuthor: String!, amount: Float): Expense
  updateExpenseAmount(expenseId: ID!, amount: Float!): Expense
  addAmount(
    expenseId: ID!
    amountValue: String!
    amountAuthor: String!
  ): Expense
  removeExpense(expenseId: ID!): Expense
  removeAmount(expenseId: ID!, amountId: ID!): Expense
}
`;

module.exports = typeDefs;
