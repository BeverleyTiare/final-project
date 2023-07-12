//apollo-server-express is a wrapper that allows us to connect Apollo Server to an Express.js application
const { gql } = require('apollo-server-express');

// "typeDefs" define the data types and queries for the server.   
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }

  /*type Sleep {
    _id: ID
    sleepDate: String
    sleepTime: String
    wakeTime: String
    sleepHours: Int
    sleepQuality: Int
    user: User
  }*/
  
  
  type Query {
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

//Mutations are used to modify data; enables us to create, update, and delete data

