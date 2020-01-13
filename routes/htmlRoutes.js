var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      res.render("index", {
        msg: "Welcome!",
        Dishes: dbDishes
      });
    });
  });

  // Load Dish page and pass in an Dish by id
  app.get("/Dish/:id", function(req, res) {
    db.Dish.findOne({ where: { id: req.params.id } }).then(function(dbDish) {
      res.render("Dish", {
        Dish: dbDish
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
