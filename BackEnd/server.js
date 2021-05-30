
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use('/posts' , postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNEWUrlParser: true,
  useCreateIndex: true,
  useInifiedTopology:true,
  useFindAndModify: true
}).then(() => app.listen(PORT, () => console.log("MongoDb connected")))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
