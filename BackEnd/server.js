// const dotenv = require('dotenv');
// // const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;

// const app = express();
// const cors = require('cors');
// const mongoose = require('mongoose');
// const routesUrls = require('./Routes/user');
// const connectDB = require('./config/db');

// dotenv.config();
// //connecting the mongoose
// mongoose.connect(process.env.MONGO_URI, () => console.log("Database connected successfully"));
// //activating body parser
// app.use(express.json());
// // app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true
//   })
// );
// connectDB();
// app.use('/', routesUrls);


// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Define API routes here
// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });
// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });




import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use('/posts' , postRoutes);

const MONGO_URI= 'mongodb+srv://nett0508:Netsy001.@cluster0.zvhfr.mongodb.net/register?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI, {
  useNEWUrlParser: true,
  useCreateIndex: true,
  useInifiedTopology:true,
  useFindAndModify: true
}).then(() => app.listen(PORT, () => console.log("MongoDb connected")))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
