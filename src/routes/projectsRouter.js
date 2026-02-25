// this file handles all requests that go to /api/projects
// same idea as employeesRouter — it's the "front desk" for project requests

var express = require('express');
var router = express.Router(); // create a mini-app just for project routes
var projectsService = require('../services/projectsService');

// GET /api/projects — someone is asking "give me the list of all projects"
// we ask the service for the list, then send it back as JSON
router.get('/', function(req, res) {
  res.json(projectsService.getAllProjects());
});

// POST /api/projects — someone is submitting a form to create a new project
// req.body contains everything: name, description, startDate, endDate, complexity, employees
// we pass the whole body to the service, which builds and saves the project
// then we send the newly created project back as JSON
router.post('/', function(req, res) {
  var project = projectsService.createProject(req.body);
  res.json(project);
});

// make this router available to app.js
module.exports = router;
