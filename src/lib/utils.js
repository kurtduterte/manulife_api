// this file holds small helper functions that can be reused anywhere in the app

// generateId creates a unique number for each new employee or project
// it uses the current time in milliseconds — since no two moments are exactly the same,
// every ID will be different
function generateId() {
  return Date.now();
}

// getPagingObject reads the URL query and figures out pagination info
// for example: /api/employees?page=2&limit=5
// → give me the 2nd page, showing 5 items at a time
// offset = how many items to skip (page 2 with limit 5 → skip the first 5)
function getPagingObject(query) {
  var page = parseInt(query.page) || 1;    // which page? default is page 1
  var limit = parseInt(query.limit) || 10; // how many per page? default is 10
  var offset = (page - 1) * limit;         // how many items to skip
  return { page: page, limit: limit, offset: offset };
}

// make both functions available to other files
module.exports = { generateId, getPagingObject };
