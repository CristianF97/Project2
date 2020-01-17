var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup');
};

exports.signin = function(req, res) {
    res.render("signin");
};

exports.checkout = function(req, res) {
    res.render("checkout");
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect("index");
    });
};