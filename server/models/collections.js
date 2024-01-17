const User = require('./user')
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Collections extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         *
         */
        static associate(models) {
            Collections.belongsTo(models.User)
        }
    }
    Collections.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.ENUM("book", "movie"),
        },
    }, {
        sequelize,
        modelName: 'Collections',
        tableName: 'Collections',
    });
    return Collections;
};