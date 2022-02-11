const db = require('./connection');
const { User, Budget, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Income' },
    { name: 'Expense' }
  ]);

  console.log('categories seeded');

  await Budget.deleteMany();

  const budget = await Budget.insertMany([
    {
      name: 'Here the income',
      description:
        'Income is the revenue a business earns from selling its goods and services or the money an individual receives in compensation for his or her labor, services, or investments.',
      image: 'income.png',
      category: categories[0]._id,
      amountofmoney: 65012.00,
      quantity: 500
    },
    {
      name: 'Salary',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'money1.png',
      category: categories[0]._id,
      amountofmoney: 1000.99,
      quantity: 500
    },
    {
      name: 'Housing',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'money3.png',
      amountofmoney: 8050.99,
      quantity: 20
    },
 
    {
      name: 'School',
      category: categories[1]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'money2.png',
      amountofmoney: 999.99,
      quantity: 600
    }
  ]);

  console.log('budget seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Michael',
    lastName: 'Pascuzzi',
    email: 'mp@iamthebestdev.com',
    password: 'password12345',
    orders: [
      {
        budgets: [budget[0]._id, budget[0]._id, budget[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Tanim',
    lastName: 'Iqbal',
    email: 'ti@testmail.com',
    password: 'password12345',
    
  });

  await User.create({
    firstName: 'Rico',
    lastName: 'Suave',
    email: 'rs@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Evan',
    lastName: 'Allen',
    email: 'ea@tindermail.com',
    password: 'tindermenow123'
  });

  await User.create({
    firstName: 'Mario',
    lastName: 'RLP',
    email: 'mario@testmail.com',
    password: 'password12345',
   
  });


  console.log('users seeded');

  process.exit();
});
