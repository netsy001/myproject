
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import path from 'path';
import postRoutes from './BackEnd/routes/posts.js';
import userRoutes from './BackEnd/routes/users.js';

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use('/posts' , postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001;

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // app.get("*", (req,res) => {
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // })
}

mongoose.connect(process.env.MONGO_URI, {
  useNEWUrlParser: true,
  useCreateIndex: true,
  useInifiedTopology:true,
  useFindAndModify: true
}).then(() => app.listen(PORT, () => console.log("MongoDb connected")))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
