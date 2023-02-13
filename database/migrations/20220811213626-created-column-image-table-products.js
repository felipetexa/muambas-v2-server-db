'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'image', {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: false,
      after: 'name'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'image')
  }
}
