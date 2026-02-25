var express = require('express');
var router = express.Router();
var employeesService = require('../services/employeesService');

router.get('/', function(req, res) {
  res.json(employeesService.getAllEmployees());
});

router.post('/', function(req, res) {
  var employee = employeesService.createEmployee(req.body.name, req.body.department);
  res.json(employee);
});

module.exports = router;
