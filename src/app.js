var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employeesRouter');
var projectsRouter = require('./routes/projectsRouter');

const getPagingObject = require('./lib/utils').getPagingObject;

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.paging = getPagingObject(req.query);
  next();
});

app.use('/api', indexRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/projects', projectsRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

module.exports = app;
