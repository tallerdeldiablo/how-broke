const { AuthenticationError } = require('apollo-server-express');
const { User, Expense } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('expenses');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('expenses');
    },
    expenses: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Expense.find(params).sort({ createdAt: -1 });
    },
    expense: async (parent, { expenseId }) => {
      return Expense.findOne({ _id: expenseId });
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
    addExpense: async (parent, { expenseValue, expenseAuthor }) => {
      const expense = await Expense.create({ expenseValue, expenseAuthor });

      await User.findOneAndUpdate(
        { username: expenseAuthor },
        { $addToSet: { expenses: expense._id } }
      );

      return expense;
    },
    addAmount: async (parent, { expenseId, amountValue, amountAuthor }) => {
      return Expense.findOneAndUpdate(
        { _id: expenseId },
        {
          $addToSet: { amounts: { amountValue, amountAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeExpense: async (parent, { expenseId }) => {
      return Expense.findOneAndDelete({ _id: expenseId });
    },
    removeAmount: async (parent, { expenseId, amountId }) => {
      return Expense.findOneAndUpdate(
        { _id: expenseId },
        { $pull: { amounts: { _id: amountId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
