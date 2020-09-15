//express dependecy 
const express = require("express");
//requre routes paths
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initializing the app from express call
const app = express();
//declaring port process.env.port for heroku or as optional port 8080 for localhost
const PORT = process.env.PORT || 8080;

// Setting up body parsing and encoding, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));