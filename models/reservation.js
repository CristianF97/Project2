module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      date: DataTypes.STRING,
      numberOfGuests: DataTypes.STRING,
      comment: DataTypes.TEXT,
    });
    return Reservation;
  };