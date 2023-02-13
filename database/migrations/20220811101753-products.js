'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      image: {
        type: Sequelize.DataTypes.STRING(200)
      },
      description: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(5, 2)
      },
      serial: {
        type: Sequelize.DataTypes.STRING(200),
        isUnique: true,
        field: 'serial_number'
      },
      active: {
        type: Sequelize.DataTypes.STRING(10)
      },
      categories_id: {
        type: Sequelize.DataTypes.INTEGER(200),
        allowNull: false,
        references: {
          model: {
            tableName: 'categories'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
}
