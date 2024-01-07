const { DataTypes} = require("sequelize");
const sequelize = require('./server/db')

const Users = sequelize.define("Users", {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        defaultValue: '',
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        defaultValue: '',
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: "user",
    },
    status: {
        type: DataTypes.ENUM('block', 'active'),
        allowNull: false,
        defaultValue: "active",
    }
})
await Users.sync({ alter: true })
module.exports = Users
