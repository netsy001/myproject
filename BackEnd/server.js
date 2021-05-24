const express = require("express");
const path = require("path");
// const PORT = process.env.PORT || 3001;
const PORT = 3001;
const app = express();
const cors = require('cors');
//import mongoose and dotenv
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./Routes/routes');
dotenv.config();
//connecting the mongoose
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected successfully"));
//activating body parser
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use('/app', routesUrls);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});