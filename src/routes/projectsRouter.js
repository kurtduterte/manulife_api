var express = require('express');
var router = express.Router();
var projectsService = require('../services/projectsService');

router.get('/', function(req, res) {
  res.json(projectsService.getAllProjects());
});

router.post('/', function(req, res) {
  var project = projectsService.createProject(req.body);
  res.json(project);
});

module.exports = router;
