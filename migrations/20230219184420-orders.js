'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      total: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      payment: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      delivery: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.STRING(200)
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders')
  }
}
