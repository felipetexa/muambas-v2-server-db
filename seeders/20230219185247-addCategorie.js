'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        id: 1,
        name: 'Headsets'
      },
      {
        id: 2,
        name: 'Keyboards'
      },
      {
        id: 3,
        name: 'Computers'
      },
      {
        id: 4,
        name: 'Celphones'
      },
      {
        id: 5,
        name: 'Video Games'
      }
    ]
    await queryInterface.bulkInsert('categories', categories, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
}
