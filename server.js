var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "app" directory in the application directory.
app.use(express.static("app"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Import routes for sending html & json API.
require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRouting")(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});