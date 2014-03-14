var LocalStrategy = require('passport-local').Strategy,
    passport = require('passport');

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log("do222en");
            user = {
                id: "1",
                name: "ddd",
                role: "fff"
            };
            return done(null, user);

        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        user = {
            id: "1",
            name: "ddd",
            role: "fff"
        };
        done(null, user);

    });
};