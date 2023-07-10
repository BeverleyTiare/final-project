const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    //addUser creates a new user and signs a token for the user.
    //const user = await User.create(args); creates a new user with the args passed in.
    //cpnst token = signToken(user); creates a token for the user.
     addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  
    // TODO: Add comments to each line of code below to describe the functionality below
    //login checks if the user exists and if the password is correct.
    //if the user exists and the password is correct, a token is created for the user.
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
        //isCorrectPassword is a method in the User model that checks if the password is correct.
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;

//in graphql : mutation addProfile($addProfileName: String!, $addProfileEmail: String!, $addProfilePassword: String!) { addProfile(name: $addProfileName, email: $addProfileEmail, password: $addProfilePassword) { token profile { _id name email } } }  
//if copy token secret from .env file and paste it into the jwt.io website, it will decode the token.