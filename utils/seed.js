const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

// Sample seed data for user and, thought
connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});
  await Thought.deleteMany({});
  
  const users = [
    {
      username: "suva",
      email: "suva@gmail.com"
    },
    {
      username: "john",
      email: "john@gmail.com"
    }
  ];

  const thoughts = [
    {
      thoughtText: "Be kind to nature !!",
      username: "suva",
    },
    {
      thoughtText: "Live laugh and have fun !!",
      username: "john"
    }
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
