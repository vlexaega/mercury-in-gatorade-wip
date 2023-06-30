const User = require('./User');
const Chart = require('./Chart');

User.hasMany(Chart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Chart.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User };
