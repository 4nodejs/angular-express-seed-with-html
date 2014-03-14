/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    passport = require('passport'),
    flash = require('connect-flash');




require('./config/passport')(passport); // pass passport for configuration
var app = module.exports = express();

// Configuration
app.configure(function() {
    app.use(express.cookieParser());

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));

    //Passport
    app.use(express.session({
        secret: 'SECRET'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(app.router);
});

app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);



//passport js
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/onlogin',
        failureRedirect: '/failedlogin'
    })
);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server
app.listen(3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});