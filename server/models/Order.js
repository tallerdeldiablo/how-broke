const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  budgets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Budget'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
