module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'categories',
      onDelete: 'CASCADE'
    }
  )
  return Category
}
