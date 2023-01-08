module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      payment: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      delivery: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(200)
      }
    },
    {
      timestamps: false,
      tableName: 'orders',
      onDelete: 'CASCADE'
    }
  )

  Order.associate = models => {
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })

    Order.belongsToMany(models.Product, {
      through: 'order_products',
      foreignKey: 'order_id',
      otherKey: 'product_id',
      as: 'products',
      onDelete: 'CASCADE'
    })
  }

  return Order
}
