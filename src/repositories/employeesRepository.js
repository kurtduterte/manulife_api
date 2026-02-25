var employees = [];

function getAll() {
  return employees;
}

function add(employee) {
  employees.push(employee);
  return employee;
}

module.exports = { getAll, add };
