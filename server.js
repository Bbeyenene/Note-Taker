//express dependecy 
var express = require("express");

// Initializing the app from express call
var app = express();
//declaring port process.env.port for heroku or as optional port 8080 for localhost
var PORT = process.env.PORT || 8080;

// Setting up body parsing and encoding, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// server listening on the port 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));