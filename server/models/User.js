const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  monthlyIncome: {
    type: Number,
    min: 0,
    default: null,
  },
  monthlySavings: {
    type: Number,
    min: 0,
    default: null,
  },
  bills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bills'
    }
  ],
  budget: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Budget'
    }
  ],
  savings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Savings'
    }
  ]
});


userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
