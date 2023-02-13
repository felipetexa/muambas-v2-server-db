'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_products', {
      order_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        },
        allowNull: false
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_products')
  }
}
