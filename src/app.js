var express = require('express');
var cors = require('cors');
var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employeesRouter');
var projectsRouter = require('./routes/projectsRouter');

var app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/projects', projectsRouter);

module.exports = app;
