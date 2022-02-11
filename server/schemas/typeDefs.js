const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }



  type Budget {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    amountofmoney: Float
    category: Category
  }


 type Bills {
   _id: ID
   bill_group: String
   bill_name: String
   bill_amount: Float
   category: Category
 } 

type Savings {
  _id: ID
  savngs_amount: Float
  category: Category
}

  type Order {
    _id: ID
    purchaseDate: String
    budgets: [Budget]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    budgets(category: ID, name: String): [Budget]
    budget(_id: ID!): Budget
    user: User
    order(_id: ID!): Order
    checkout(budgets: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(budgets: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBudget(_id: ID!, quantity: Int!): Budget
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
