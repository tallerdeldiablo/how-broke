const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const expenseSchema = new Schema({
  expenseValue: {
    type: String,
    required: 'You need to leave a expense!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  expenseAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  amounts: [
    {
      amountValue: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      amountAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Expense = model('Expense', expenseSchema);

module.exports = Expense;
