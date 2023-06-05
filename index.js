const express = require("express");
const server = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// api routes
const personRoutes = require('./routes/personRoutes');
server.use('/person', personRoutes);
// User Routes
const userRoutes = require('./routes/userRoutes');
server.use('/user', userRoutes);

// Hero Routes
const heroRoutes = require('./routes/heroRoutes');
server.use('/hero', heroRoutes);

mongoose
  .connect(
    "mongodb+srv://marcelosoaresinc:mm95845579@petapi.g7max2l.mongodb.net/petApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log('Conectado');
    server.listen(3000)
  })
  .catch((err) => console.log(err));

