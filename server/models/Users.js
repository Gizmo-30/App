module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: {
                arguments: true,
                message: "duplicate"
            },
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
        },
    })
    return Users
}

