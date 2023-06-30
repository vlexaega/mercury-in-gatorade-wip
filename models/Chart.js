const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Chart extends Model{

}

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
        },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chart',   
        }
);

module.exports= Chart;