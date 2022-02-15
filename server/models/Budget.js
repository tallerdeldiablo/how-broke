const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
    {
        budget_amount: {
            type: Number,
            required: true,
            unique: false,
            trim: true,
            match: [/^[0-9]+(\.[0-9]{1,2})?$/]
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
        }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;