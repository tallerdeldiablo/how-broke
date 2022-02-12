const db = require('../config/connection');
const { User, Budget } = require('../models');
const userSeeds = require('./userSeeds.json');
const billSeeds = require('./billSeeds.json');

db.once('open', async () => {
  try {
    await Budget.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < billSeeds.length; i++) {
      const { _id, billsDescription } = await Budget.create(billSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: billsDescription },
        {
          $addToSet: {
           budgets: _id,
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
