const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const budgetSchema = new Schema({
  billName: {
    type: String,
    required: 'You need to leave a budget!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  billsDescription: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
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

const Budget = model('Budget', budgetSchema);

module.exports = Budget;
