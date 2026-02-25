var projectsRepository = require('../repositories/projectsRepository');
var utils = require('../lib/utils');

function getAllProjects() {
  return projectsRepository.getAll();
}

function createProject(data) {
  var project = {
    id: utils.generateId(),
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    complexity: data.complexity,
    employees: data.employees
  };
  return projectsRepository.add(project);
}

module.exports = { getAllProjects, createProject };
