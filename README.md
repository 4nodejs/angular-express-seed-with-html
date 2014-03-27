

## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies, and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      partials/         --> angular view partials (partial jade templates)
        partial1.html
        partial2.html


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express look at http://expressjs.com/
