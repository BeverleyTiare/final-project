//apollo-server-express is a wrapper that allows us to connect Apollo Server to an Express.js application
const { gql } = require('apollo-server-express');

// "typeDefs" define the data types and queries for the server.The "!" after the data type means that it's required.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    sleeps: [Sleep]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Response{
    name: String
    value: String
  }

  input ResponseInput {
    name: String
    value: String
  }

  type Sleep {
    _id: ID
    date: String
    author: User
    responses: [Response]
    score: Int
    category: String
    notes: String
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    sleep: Sleep
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSleep(responses: [ResponseInput]!, score: Int!, category: String!): Sleep
    updateSleepNotes(sleepId: ID!, notes: String!): Sleep 
  }
`;

module.exports = typeDefs;

//Mutations are used to modify data; enables us to create, update, and delete data

//  updateSleepPlan(sleepId: ID!, plan: String!): Sleep