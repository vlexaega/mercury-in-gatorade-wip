const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Chart extends Model {}

Chart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      // YYYY-MM-DD
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    birthTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    birthPlace: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    astroSign: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chart',
  }
);

module.exports = Chart;
