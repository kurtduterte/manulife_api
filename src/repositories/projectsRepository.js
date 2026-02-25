// the repository is the "storage room" for projects
// it holds all project data in memory while the server is running

// load the starting projects from the JSON file
// these are the default projects that exist when the server first starts
var projects = require('../data/projects.json');

// getAll — return every project in the list
function getAll() {
  return projects;
}

// add — add a new project to the list and return it
function add(project) {
  projects.push(project); // push = add to the end of the list
  return project;
}

// make these two functions available to other files (like the service)
module.exports = { getAll, add };
