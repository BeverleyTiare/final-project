//  create the resolvers for the User model and Sleep model.
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { Sleep } = require("../models");

//resolvers: for Users and Sleeps
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("sleeps");
    },

    //Function to get the sleep data for the logged in user
    sleep: async (_parent, _params, context) => {
      if (context.user) {
        return await Sleep.findOne(
          { author: context.user._id },
          {},
          { createdAt: 1 }
        );
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args); //creates a new user with the args passed in.
      const token = signToken(user); //creates a token for the user.
      return { token, user };
    },

    //login checks if the user exists and if the password is correct: then token is created.
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    //addSleep function to add sleep data to the database
    addSleep: async (parent, { responses, score, category }, context) => {
      if (context.user) {
        const sleep = await Sleep.create({
          responses,
          author: context.user._id,
          score,
          category,
        });
        console.log(sleep, "sleep aded");
        return sleep;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    
    //updateSleepNotes function to update the notes for a sleep entry
    updateSleepNotes: async (parent, { sleepId, notes }, context) => {
      if (context.user) {
        const sleep = await Sleep.findOneAndUpdate(
          { _id: sleepId },
          { notes: notes },
          { new: true }
        );
        return sleep;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

//in graphql : mutation addProfile($addProfileName: String!, $addProfileEmail: String!, $addProfilePassword: String!) { addProfile(name: $addProfileName, email: $addProfileEmail, password: $addProfilePassword) { token profile { _id name email } } }
//if copy token secret from .env file and paste it into the jwt.io website, it will decode the token.
