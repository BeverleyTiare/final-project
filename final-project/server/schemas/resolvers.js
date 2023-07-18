//  create the resolvers for the User model and sleep model.
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { Sleep } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },
  //sleep: async (parent, { sleepId }) => {
  //  return Sleep.findOne({ _id: sleepId });
  //},


  Mutation: {
    //const user = await User.create(args); creates a new user with the args passed in.
    //const token = signToken(user); creates a token for the user.
     addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
  
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
    addSleep: async (parent, {responses}, context) => {
      if (context.user)
      {
        const sleep = await Sleep.create({responses, author: context.user._id, plan:"get more sleep!"});
        console.log(sleep, "sleep aded")
        return sleep;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateSleepPlan: async (parent, {sleepId, plan}, context) => {
      if (context.user)
      {
        const sleep = await Sleep.findOneAndUpdate(
          {_id: sleepId},
          {plan: plan},
          {new: true}
        );
        return sleep;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;

//in graphql : mutation addProfile($addProfileName: String!, $addProfileEmail: String!, $addProfilePassword: String!) { addProfile(name: $addProfileName, email: $addProfileEmail, password: $addProfilePassword) { token profile { _id name email } } }  
//if copy token secret from .env file and paste it into the jwt.io website, it will decode the token.