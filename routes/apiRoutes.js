var db = require("../models");
var randomize = require("randomatic");
module.exports = function(app) {
  
  // Get all dishes
  app.get("/api/dishes", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      res.json(dbDishes);
    });
  });

  // Create a new example
  app.post("/api/dishes", function(req, res) {
    db.Dish.create(req.body).then(function(dbDishes) {
      res.json(dbDishes);
    });
  });

  // Delete an Dish by id
  app.delete("/api/dishes/:id", function(req, res) {
    db.Dish.destroy({ where: { id: req.params.id } }).then(function(dbDishes) {
      res.json(dbDishes);
    });
  });

  app.get("/api/reservation", function(req, res) {
    db.Reservation.findAll({}).then(function(dbReservations) {
      res.json(dbReservations);
    });
  });

  app.post("/api/reservation", function(req, res) {
    db.Reservation.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      date: req.body.date,
      numberOfGuests: req.body.numberOfGuests,
      comment: req.body.comment,
    })
      .then(function(dbReservations) {
        res.json(randomize('0', 10));
    });
  });
};
