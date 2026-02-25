// the service is the "brain" for projects
// it handles the logic of building a project object before saving it

// bring in the storage room for projects
var projectsRepository = require('../repositories/projectsRepository');

// bring in utils so we can generate a unique ID for each new project
var utils = require('../lib/utils');

// getAllProjects — just ask the repository to return the full list
function getAllProjects() {
  return projectsRepository.getAll();
}

// createProject — take the raw data from the request, build a full project object, then save it
// data comes from the JSON body the React frontend sends us
function createProject(data) {
  var project = {
    id: utils.generateId(),        // unique ID based on current time
    name: data.name,               // project name
    description: data.description, // what the project is about
    startDate: data.startDate,     // when it starts
    endDate: data.endDate,         // when it ends
    complexity: data.complexity,   // Low, Medium, or High
    employees: data.employees      // array of employee IDs assigned to this project
  };
  return projectsRepository.add(project); // save it and return the saved project
}

// make both functions available to the router
module.exports = { getAllProjects, createProject };
