var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var morgan = require('morgan');
var compression = require('compression');
const { DB_MONGO_CONNECTION_STRING } = require('./utils/urls');

var productRouter = require('./routes/products');





var logStream = fs.createWriteStream(path.join(__dirname, 'app.log'), {
  flags: 'a',
});

app.use(morgan('combined', { stream: logStream }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(compression());
// app.use(express.static(path.join(__dirname, 'public')));

const {
  unCaughtExceptionHandler,
} = require('./utils/helper_tools');
var db = require('./repo/db_connection');
db.connect(DB_MONGO_CONNECTION_STRING);
var {
  PRODUCTBASEURL,
} = require('./utils/endpoints');


// app.use('/product', usersRouter);
app.use(PRODUCTBASEURL, productRouter);


// const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

process.on('uncaughtException', unCaughtExceptionHandler);
process.on('unhandledRejection', unCaughtExceptionHandler);

app.listen(4000);

module.exports = app;
