// think of this file as the "main control room" of the server
// it sets up everything the server needs before it starts listening for requests

// express is the framework that lets us build the server easily
var express = require('express');

// path helps us find folders on the computer (like where the public folder is)
var path = require('path');

// cookie-parser reads cookies from the browser (like saved login info)
var cookieParser = require('cookie-parser');

// morgan is a logger — it prints every request to the terminal so we can see what's happening
var logger = require('morgan');

// cors allows the React app (on port 3000) to talk to this server (on port 5000)
// without this, the browser would block the connection
var cors = require('cors');

// these are our "route handlers" — they decide what to do for each URL
var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employeesRouter');
var projectsRouter = require('./routes/projectsRouter');

// getPagingObject helps us handle "give me page 2 with 10 items" type requests
const getPagingObject = require('./lib/utils').getPagingObject;

// create the actual express app — this is the server itself
var app = express();

// allow the React frontend to make requests to this server
app.use(cors());

// log every request in the terminal (GET /api/employees 200, etc.)
app.use(logger('dev'));

// allow the server to read JSON data sent from the frontend
app.use(express.json());

// allow the server to read form data (like from an HTML form)
app.use(express.urlencoded({ extended: false }));

// allow the server to read cookies from the browser
app.use(cookieParser());

// serve any files inside the public/ folder directly (like images or HTML files)
app.use(express.static(path.join(__dirname, 'public')));

// before every request, attach paging info (page number, limit, offset)
// so any route can use req.paging if it needs to paginate results
app.use((req, res, next) => {
  req.paging = getPagingObject(req.query);
  next(); // "okay, move on to the actual route now"
});

// hook up our routes — when someone visits these URLs, use the matching router
app.use('/api', indexRouter);             // GET /api → health check
app.use('/api/employees', employeesRouter); // GET/POST /api/employees
app.use('/api/projects', projectsRouter);   // GET/POST /api/projects

// start the server and tell it to listen on port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

// export the app so other files can use it if needed (like tests)
module.exports = app;
