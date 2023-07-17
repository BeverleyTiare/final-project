const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
//const {graphqlHTTP} =require('express-graphql'); 
//import apolloserver, start
//import data
//import typeDefs


//const server  =new ApolloServer({
//  typeDefs,
//  resolvers,
//  context: authMiddleware,
//});

//const {url} =await startStandAloneServer(server,{
    //listen:{port:4000}
//});

//console.log(`Server ready at ${url}`);

module.exports = { typeDefs, resolvers };
