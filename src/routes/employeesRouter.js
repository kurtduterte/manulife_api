// this file handles all requests that go to /api/employees
// think of it as the "front desk" — it receives requests and sends back responses

var express = require('express');
var router = express.Router(); // create a mini-app just for employee routes
var employeesService = require('../services/employeesService');

// GET /api/employees — someone is asking "give me the list of all employees"
// we ask the service for the list, then send it back as JSON
router.get('/', function(req, res) {
  res.json(employeesService.getAllEmployees());
});

// POST /api/employees — someone is submitting a form to add a new employee
// the name and department come from req.body (the data sent by the React form)
// we pass them to the service, which creates and saves the employee
// then we send the newly created employee back as JSON
router.post('/', function(req, res) {
  var employee = employeesService.createEmployee(req.body.name, req.body.department);
  res.json(employee);
});

// make this router available to app.js
module.exports = router;
