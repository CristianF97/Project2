var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get("/signup", authController.signup);

    // app.get("/signin", authController.signin);

    app.get('/checkout', isLoggedIn, authController.checkout);

    app.get("/logout",authController.logout);

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/order",

        failureRedirect: "/signup"
    }));

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/order",
        failureRedirect: "/"
    }));
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
        return next();
        res.redirect("/order");
    }
   
}