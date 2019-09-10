const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const usersRouter = require('./users/users.routes');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/techkids-hotgirls', {useNewUrlParser: true}, (error) => {
  if (error) {
    throw error;
  } else {
    console.log('Connect to mongodb success');
    const server = express();

    // midlewares
    server.use(bodyParser.json());
    server.use((req,res,next)=>{
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Methods", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  }); 
    server.use(expressSession({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    }));

    // routers
    server.use('/users', usersRouter);

    server.listen(3001, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('Server listen on port 3001 ...');
      }
    });
  }
});