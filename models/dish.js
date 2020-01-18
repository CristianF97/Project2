module.exports = function(sequelize, DataTypes) {
  var Dish = sequelize.define("Dish", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    description: DataTypes.TEXT
  });
  return Dish;
};
