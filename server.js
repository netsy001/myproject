
const express = require  ('express');
const mongoose = require  ('mongoose');
const cors = require  ('cors');
const dotenv = require  ('dotenv');
const path = require('path');
const postRoutes = require  ('./BackEnd/routes/posts.js');
const userRoutes = require  ('./BackEnd/routes/users.js');

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use('/posts' , postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001;

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

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
