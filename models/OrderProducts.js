module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define(
    'OrderProducts',
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'order_products',
      onDelete: 'CASCADE'
    }
  )
  OrderProducts.removeAttribute('id')
  return OrderProducts
}
