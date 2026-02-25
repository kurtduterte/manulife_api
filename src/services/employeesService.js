var employeesRepository = require('../repositories/employeesRepository');
var utils = require('../lib/utils');

function getAllEmployees() {
  return employeesRepository.getAll();
}

function createEmployee(name, department) {
  var employee = { id: utils.generateId(), name: name, department: department };
  return employeesRepository.add(employee);
}

module.exports = { getAllEmployees, createEmployee };
