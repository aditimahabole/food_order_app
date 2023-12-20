import express from "express";
import { AdminRoute, VandorRoute } from './routes';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { MONGO_URI } from "./config";

const app = express();
const port = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,

}).then(result => {
    console.log("yay connected")
  
}).catch(err => console.log('err'));

app.get('/', (req, res) => {
  res.send('Welcome to the main page!');
});

app.listen(port, () => {
  console.log(`SERVER RUNNING ${port}`);
});
