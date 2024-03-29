const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const categoryRoutes = require('./routes/category');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(categoryRoutes);


const PORT = 8000;

const DB_URL = 'mongodb+srv://dulajupananda:Ddbu1998@cluster0.wwprcvx.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) =>{
    console.log('DB connection error', err);
})

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


