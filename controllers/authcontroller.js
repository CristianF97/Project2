var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup');
};

exports.order = function(req, res) {
    res.render("order");
};

exports.checkout = function(req, res) {
    res.render("checkout");
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect("/");
    });
};