// //import {apolloserver} from '@apollo-server-express';
//import {typeDefs,resolvers} from './schemas';

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
// //
// //const server  =new ApolloServer({
// //  typeDefs,
// //  resolvers,i
// //  context: authMiddleware,
// //});

// //const {url} =await startStandAloneServer(server,{
//     //listen:{port:4000}
// //});

// //console.log(`Server ready at ${url}`);

module.exports = { typeDefs, resolvers };


// //NB:  apollographql.com/docs/apollo-server/getting-started/ has different code? as follows...
// //import { ApolloServer } from '@apollo/server';
// //import { startStandaloneServer } from '@apollo/server/standalone';

// //G QL schema: chnage author to body?
// //const typeDefs = `#graphql

//  //type Plan {
//     title: String
//     author: String 
//   }

//   type Query {
//     plan: [Plan]
//   }
// `;

// //Defining data: appollo return

// const plan = [
//     {
//       title: 'Baseline Plan',
//       author: '',
//     },
//     {
//       title: '',
//       author: '',
//     },
//   ];

//   //Defining resolver
//   const resolvers = {
//     Query: {
//       plan: () => plan,
//     },
//   };

//   //Create an instance of ApolloServer
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
  
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });
  
//   console.log(`🚀  Server ready at: ${url}`);

//   //npm start

//   //CLI: 🚀  Server ready at: http://localhost:4000/

//   //Execute first query: Apollo sandbox ( triggered via the browser above)
//   //The Sandbox UI includes:

// //An Operations panel for writing and executing queries (in the middle)
// //A Response panel for viewing query results (on the right)
// //Tabs for schema exploration, search, and settings (on the left)
// //A URL bar for connecting to other GraphQL servers (in the upper left)

// //query string: 
// /*query GetPlan {
//     plan {
//       title
//       author
//     }
//   }*/

//   //Mutation type
//   /*type Mutation {
//     addPlan(title: String, author: String): Plan
//   }*/

//   //New Plan
//   /*mutation CreatePlan {
//     addPlan(title: "My Plan", author: "Your name") {
//       title
//       author {
//         name
//       }
//     }
//   }*/

//   //input type
//   /*input PlanContent {
//     title: String
//     body: String
//   }*/

//   /*input PlanContent {
//     title: String
//     body: String
//     media: [MediaDetails!]
//   }
  
//   input MediaDetails {
//     format: MediaFormat!
//     url: String!
//   }
  
//   enum MediaFormat {
//     IMAGE
//     VIDEO
//   }*/

//   //data sources: from backend data storage as well as 3rd party??

//   //mutations
//   //updating emai/
//   /*type Mutation {
//     # This mutation takes id and email parameters and responds with a User
//     updateUserEmail(id: ID!, email: String!): User
//   }
  
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//   }*/

//   /*mutation updateMyUser {
//     updateUserEmail(id: 1, email: "jane@example.com") {
//       id
//       name
//       email
//     }
//   }*/

//   //see doc for structuring  mutations responses
//   //see doc on resolvers
// //EG: 
// /*const resolvers = {
//     Query: {
//       user(parent, args, contextValue, info) {
//         return users.find((user) => user.id === args.id);
//       },
//     },
//   };*/
// //A resolver can optionally accept four positional arguments: (parent, args, contextValue, info).
// //The args argument is an object that contains all GraphQL arguments that were provided for the field by the GraphQL operation.

// //After you define all of your resolvers, you pass them to the constructor of ApolloServer (as the resolvers property), along with your schema's definition (as the typeDefs property).

// //The following example defines a hardcoded data set, a schema, and a resolver map. It then initializes an ApolloServer instance, passing the schema and resolvers to it.

// /*import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// // Hardcoded data store
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

// // Schema definition
// const typeDefs = `#graphql
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// // Resolver map
// const resolvers = {
//   Query: {
//     books() {
//       return books;
//     },
//   },
// };

// // Pass schema definition and resolvers to the
// // ApolloServer constructor
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Launch the server
// const { url } = await startStandaloneServer(server);

// console.log(`🚀 Server listening at: ${url}`);*/

// //see docs for fetching data and 3rd party apis