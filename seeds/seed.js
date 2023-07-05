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
  }
  // } finally {
  //   await sequelize.close();
  // }

  try {
    await Chart.bulkCreate([
      {
        name: 'Chris Lee',
        birthDate: '2000-06-13',
        birthTime: '05:56:53',
        birthPlace: 'South Carolina',
        astroSign: 'not Real',
        user_id: 1,
      },
      {
        name: 'Ben Red',
        birthDate: '2010-04-20',
        birthTime: '09:57:59',
        birthPlace: 'Texas',
        astroSign: 'Bullmalarkey',
        user_id: 2,
      },
    ]);
  } catch (error) {
    console.error('Error seeding chart:', error);
  } finally {
    await sequelize.close();
  }
};

seedUsers();
