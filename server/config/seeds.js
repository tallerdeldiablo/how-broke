const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Income' },
    { name: 'Outcome' },
    { name: 'Crypto' },
    { name: 'Stocks' },
    { name: 'noidea' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
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
      name: 'Here the outcome',
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
     //detele this
    // {
    //   name: 'Handmade Soap',
    //   category: categories[1]._id,
    //   description:
    //     'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
    //   image: 'soap.jpg',
    //   amountofmoney: 3.99,
    //   quantity: 50
    // },
    // {
    //   name: 'Set of Wooden Spoons',
    //   category: categories[1]._id,
    //   description:
    //     'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
    //   image: 'wooden-spoons.jpg',
    //   amountofmoney: 14.99,
    //   quantity: 100
    // },
    // {
    //   name: 'Camera',
    //   category: categories[1]._id,
    //   description:
    //     'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
    //   image: 'camera.jpg',
    //   amountofmoney: 399.99,
    //   quantity: 30
    // },
    // {
    //   name: 'Tablet',
    //   category: categories[1]._id,
    //   description:
    //     'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
    //   image: 'tablet.jpg',
    //   amountofmoney: 199.99,
    //   quantity: 30
    // },
    // {
    //   name: 'Tales at Bedtime',
    //   category: categories[1]._id,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
    //   image: 'bedtime-book.jpg',
    //   amountofmoney: 9.99,
    //   quantity: 100
    // },
    //detele this
    // {
    //   name: 'Spinning Top',
    //   category: categories[1]._id,
    //   description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
    //   image: 'spinning-top.jpg',
    //   amountofmoney: 1.99,
    //   quantity: 1000
    // },
    // {
    //   name: 'Set of Plastic Horses',
    //   category: categories[2]._id,
    //   description:
    //     'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
    //   image: 'plastic-horses.jpg',
    //   amountofmoney: 2.99,
    //   quantity: 1000
    // },
    // {
    //   name: 'Teddy Bear',
    //   category: categories[2]._id,
    //   description:
    //     'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
    //   image: 'teddy-bear.jpg',
    //   amountofmoney: 7.99,
    //   quantity: 100
    // },
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
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Tanim',
    lastName: 'Iqbal',
    email: 'tanim@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Mario',
    lastName: 'RLP',
    email: 'mario@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });


  console.log('users seeded');

  process.exit();
});
