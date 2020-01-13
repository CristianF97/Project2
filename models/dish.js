module.exports = function(sequelize, DataTypes) {
  var Dish = sequelize.define("Dish", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2)
  });
  return Dish;
};
