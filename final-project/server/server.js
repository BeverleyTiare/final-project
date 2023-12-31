// This file is the entry point for the server: express, apollo, and mongoose are initialized here
//auth middleware enables the server to authenticate the user with every request
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const{ authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

// Listening port
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Middleware enables the server to parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, '../client/build')));

// express middleware that will intercept all client requests and if no other route defined, send back the React HTML
app.get(['/', '/sleep', '/yourplan', '/login', '/signup'],(req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// #Creates a 'new instance of an Apollo server' with the 'GraphQL schema'
//Prepares app for incoming requests
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  // Connects to the database before the server starts
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);