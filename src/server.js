const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rzzyd.mongodb.net/omnistack8?retryWrites=true&w=majority',{
  useNewUrlParser: true
});
// GET, POST, PUT, DELETE
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
