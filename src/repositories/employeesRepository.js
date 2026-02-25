var employees = require('../data/employees.json');

function getAll() {
  return employees;
}

function add(employee) {
  employees.push(employee);
  return employee;
}

module.exports = { getAll, add };
