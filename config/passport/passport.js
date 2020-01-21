var bcrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require("passport-local").Strategy;
    
    passport.use("local-signup", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, req.flash("emailInuse", "That email is already in use"));
                    } else {
                        var userPassword = generateHash(password);
                        
                        var data = 
                        {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                        User.create(data).then(function(newUser, created) {
                            if (!newUser) {
                                return done(null, false, req.flash("emailInuse", "That email is already in use"));
                            }
                            if (newUser) {
                                return done(null, newUser);
                            };
                        });
                    };
            });
        }
        ));
        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });
        passport.deserializeUser(function(id, done) {
            User.findByPk(id).then(function(user) {
                if (user) {
                    done(null, user.get());
                    loggedIn = true;
                } else {
                    done(user.errors, null);
                };
            });
        });
        passport.use("local-signin", new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true
            },
            function(req, email, password, done) {
                var User = user;

                var isValidPassword = function(userpass, password) {
                    return bcrypt.compareSync(password, userpass);
                }
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    if (!user) {
                        return done(null, false, req.flash("errorEmail", "Email does not exist"));
                        }
                    if (!isValidPassword(user.password, password)) {
                        return done(null, false, req.flash("errorPassword", "Incorrect password"));
                        }
                        var userinfo = user.get();
                        return done(null, userinfo);
                    }).catch(function(err) {
                        console.log(err);
                        return done(null, false, req.flash("errorUnknown", "Error logging in"));
                        });
                    }
                ));
            }
                    
                    
                    
                
                
            
    