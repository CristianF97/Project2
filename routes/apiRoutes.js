var db = require("../models");
var randomize = require("randomatic");
module.exports = function(app) {
  // Get all dishes
  app.get("/api/index", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      res.json(dbDishes);
    });
  });

  app.get("/api/menu", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      console.log(dbDishes);
      res.json(dbDishes);
    });
  });
  // // Create a new example
  // app.get("/api/dishes", function(req, res) {
  //   let data =
  //   {
  //     name: "Clam Chowder",
  //     price: "MP",
  //     description: "Texas quahog clams in a clear broth with parsnips, salsify, carrots, celery, and potatoes. Served in a sourdough bread bowl."
  //   }
  //   let {name, price, description} = data;
  //   Dish.create({name, price, description}).then(function(dishes) {
  //     res.json(dishes);
  //   })
  // });

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
      comment: req.body.comment
    }).then(function(dbReservations) {
      res.json(randomize("0", 10));
      res.json(dbReservations);
    });
  });
};
