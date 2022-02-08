const { Schema, model } = require('mongoose');


const savingsSchema = new Schema(
    {
        savings_amount: {
            type: Number,
            required: true,
            unique: false,
            trim: true,
            match: [/^[0-9]+(\.[0-9]{1,2})?$/]
        }
    }
);

const Savings = model('Savings', savingsSchema);

module.exports = Savings;