// the repository is like a "storage room" — it holds the data and knows how to get or add items
// think of it like a filing cabinet for employees

// load the starting employees from the JSON file
// these are our "default" employees that exist when the server first starts
var employees = require('../data/employees.json');

// getAll — open the filing cabinet and return every employee inside
function getAll() {
  return employees;
}

// add — put a new employee into the filing cabinet
// then return that employee so the caller knows it was saved
function add(employee) {
  employees.push(employee); // push = add to the end of the list
  return employee;
}

// make these two functions available to other files (like the service)
module.exports = { getAll, add };
