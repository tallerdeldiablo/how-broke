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

  type Order {
    _id: ID
    purchaseDate: String
    budgets: [Budget]
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    budgets: [Budget]!
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    budgets(username: String): [Budget]
    budget(budgetId: ID!): Budget
    me: User
  }
 type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBudget(billName: String!): Budget
   
    removeBudget(budgetId: ID!): Budget
   
  }
`;

module.exports = typeDefs;
