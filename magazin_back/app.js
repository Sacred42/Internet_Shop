const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('./models/userPassport');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute')

require('./config/config');
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});

app.use(bodyParser.json());
app.use(productRoute);
app.use(userRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    session({
      secret: 'secret',
      resave: false,
      store: new MongoStore({mongooseConnection: mongoose.connection}),
      saveUninitialized: true,
      cookie: { maxAge: 180 * 60 * 1000 }
    })
  )
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.listen(5000 , ()=> console.log('Server is working'));

try{
    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false' , { useNewUrlParser : true, useFindAndModify : false , useUnifiedTopology: true});   
}
catch(e){
  console.log(e);
}