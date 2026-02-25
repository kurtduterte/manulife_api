var projects = [];

function getAll() {
  return projects;
}

function add(project) {
  projects.push(project);
  return project;
}

module.exports = { getAll, add };
