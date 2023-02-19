'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        isUnique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
      },
      telephone: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      avatar: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true
      },

      is_admin: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
