// the service is the "brain" between the route and the storage room
// the route asks the service what to do, and the service talks to the repository to get or save data

// bring in the storage room (repository) so we can get/add employees
var employeesRepository = require('../repositories/employeesRepository');

// bring in utils so we can generate a unique ID for each new employee
var utils = require('../lib/utils');

// getAllEmployees — just ask the repository to return the full list
function getAllEmployees() {
  return employeesRepository.getAll();
}

// createEmployee — build a proper employee object, then save it
// name and department come from the form the user filled out
function createEmployee(name, department) {
  var employee = {
    id: utils.generateId(), // give it a unique ID based on current time
    name: name,
    department: department
  };
  return employeesRepository.add(employee); // save it and return the saved employee
}

// make both functions available to the router
module.exports = { getAllEmployees, createEmployee };
