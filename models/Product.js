module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
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
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: 'logo.png'
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      active: {
        type: DataTypes.STRING(10)
      },
      serial: {
        type: DataTypes.STRING(200),
        isUnique: true,
        field: 'serial_number'
      },
      categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'products'
    }
  )

  Product.associate = models => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categories_id',

      as: 'category'
    })
  }

  return Product
}
