const db = require('../config/connection');
const { User, Expense } = require('../models');
const userSeeds = require('./userSeeds.json');
const expenseSeeds = require('./expenseSeeds.json');

db.once('open', async () => {
  try {
    await Expense.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < expenseSeeds.length; i++) {
      const { _id, expenseAuthor } = await Expense.create(expenseSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: expenseAuthor },
        {
          $addToSet: {
            expenses: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }


  
  console.log('all done!');
  process.exit(0);
});
