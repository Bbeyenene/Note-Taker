var express = require("express");

// Initializing the app and poret
var app = express();
var PORT = process.env.PORT || 8080;

// Setting up body parsing and encoding, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// server listening on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
