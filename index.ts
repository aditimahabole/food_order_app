import express from "express";
import {AdminRoute,VandorRoute} from './routes'
import bodyParser from "body-parser";

const app = express();
const port = 8001
//body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use('/admin',AdminRoute)
app.use('/vandor',VandorRoute)
app.get('/', (req, res) => {
    res.send('Welcome to the main page!');
});

app.listen(port,()=>{
    // console.clear();
    console.log(`SERVER RUNNING ${port}`);
})