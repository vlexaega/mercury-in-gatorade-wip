const sequelize = require('../config/connection');
const { User, Chart } = require('../models');

const seedUsers = async () => {
  await sequelize.sync({ force: true });

  try {
    await User.bulkCreate(
      [
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
      ],
      {
        individualHooks: true,
        returning: true,
      }
    );
    console.log('User seed data created successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await sequelize.close();
  }

  try {
    await Chart.bulkCreate([
      {
        name: 'Chris Lee',
        birthDate: '06132000',
        birthTime: '05:56:53',
        birthPlace: 'South Carolina',
        user_id: 1,
      },
      {
        name: 'Ben Red',
        birthDate: '09152010',
        birthTime: '09:57:59',
        birthPlace: 'Texas',
        user_id: 2,
      },
    ]);
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await sequelize.close();
  }
};

seedUsers();
