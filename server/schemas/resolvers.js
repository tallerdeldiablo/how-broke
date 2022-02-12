const { AuthenticationError } = require('apollo-server-express');
const { User, Budget } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('budgets');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('budgets');
    },
    budgets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Budget.find(params).sort({ createdAt: -1 });
    },
    budget: async (parent, { budgetId }) => {
      return Budget.findOne({ _id: budgetId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('budgets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addBudget: async (parent, { budgetText }, context) => {
      if (context.user) {
        const budget = await Budget.create({
          budgetText,
          budgetAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { budgets: budget._id } }
        );

        return budget;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  
    removeBudget: async (parent, { budgetId }, context) => {
      if (context.user) {
        const budget = await Budget.findOneAndDelete({
          _id: budgetId,
          budgetAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { budgets: budget._id } }
        );

        return budget;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
  },
};

module.exports = resolvers;
