'use strict'

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(200)
      },
      email: {
        type: DataTypes.STRING(200),
        isUnique: true
      },
      password: {
        type: DataTypes.STRING(400)
      },
      telephone: {
        type: DataTypes.STRING(100),
        defaultValue: ''
      },
      avatar: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      is_admin: {
        type: DataTypes.TINYINT,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      onDelete: 'CASCADE'
    }
  )

  return User
}
