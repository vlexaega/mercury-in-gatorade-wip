const sequelize = require('../config/connection');
const User = require('../models/User');

const seedUsers = async () => {
  await sequelize.sync({ force: true });

  try {
    await User.bulkCreate([
      {
        name: 'Aurora Stone',
        email: 'aurora@me.com',
        password: 'sosilly123',
      },
      {
        name: 'Alex Vega',
        email: 'alex@you.com',
        password: 'sosilly456',
      },
    ], {
      individualHooks: true,
      returning: true,
    });
    console.log('User seed data created successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await sequelize.close();
  }
};

seedUsers();
