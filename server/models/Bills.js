const { Schema, model } = require('mongoose');

const billsSchema = new Schema(
    {
        bill_group: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        bill_name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        bill_amount: {
            type: Number,
            required: true,
            unique: false,
            trim: true,
            match: [/^[0-9]+(\.[0-9]{1,2})?$/]
        },
        category: {
            type: String,
            required: true,
            unique: false,
            trim: true,
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

const Bills = model('Bills', billsSchema);

module.exports = Bills;